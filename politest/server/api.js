// Simple API endpoint handler for the political test
// This will be called from the frontend to save test results

const { Pool } = require('pg');

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Initialize database tables
async function initDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        language VARCHAR(10) NOT NULL DEFAULT 'ko',
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS test_results (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        total_score INTEGER NOT NULL,
        result_type VARCHAR(50) NOT NULL,
        answers JSONB NOT NULL,
        questions_used JSONB NOT NULL,
        completed_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Save test result to database
async function saveTestResult(userData, testData) {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Insert or get user
    let userId;
    if (userData.name) {
      const userResult = await client.query(
        'INSERT INTO users (name, language) VALUES ($1, $2) RETURNING id',
        [userData.name, userData.language || 'ko']
      );
      userId = userResult.rows[0].id;
    } else {
      // Anonymous user
      const userResult = await client.query(
        'INSERT INTO users (language) VALUES ($1) RETURNING id',
        [userData.language || 'ko']
      );
      userId = userResult.rows[0].id;
    }
    
    // Insert test result
    const resultInsert = await client.query(
      `INSERT INTO test_results (user_id, total_score, result_type, answers, questions_used)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [
        userId,
        testData.totalScore,
        testData.resultType,
        JSON.stringify(testData.answers),
        JSON.stringify(testData.questionsUsed)
      ]
    );
    
    await client.query('COMMIT');
    
    return {
      success: true,
      userId: userId,
      resultId: resultInsert.rows[0].id
    };
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error saving test result:', error);
    return {
      success: false,
      error: error.message
    };
  } finally {
    client.release();
  }
}

// Get test statistics
async function getTestStatistics() {
  try {
    const totalTests = await pool.query('SELECT COUNT(*) as count FROM test_results');
    
    const resultTypeStats = await pool.query(`
      SELECT result_type, COUNT(*) as count 
      FROM test_results 
      GROUP BY result_type 
      ORDER BY count DESC
    `);
    
    const languageStats = await pool.query(`
      SELECT u.language, COUNT(*) as count 
      FROM test_results tr 
      JOIN users u ON tr.user_id = u.id 
      GROUP BY u.language 
      ORDER BY count DESC
    `);
    
    return {
      totalTests: parseInt(totalTests.rows[0].count),
      resultTypes: resultTypeStats.rows,
      languages: languageStats.rows
    };
  } catch (error) {
    console.error('Error getting statistics:', error);
    return null;
  }
}

// Export functions for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initDatabase,
    saveTestResult,
    getTestStatistics,
    pool
  };
}