// Global Variables
let currentLanguage = 'ko';
let currentUser = '';
let questions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let totalScore = 0;


// Language Translations
const translations = {
    ko: typeof ko_translations !== 'undefined' ? ko_translations : {},
    en: typeof en_translations !== 'undefined' ? en_translations : {},
    jp: typeof jp_translations !== 'undefined' ? jp_translations : {},
    cn: typeof cn_translations !== 'undefined' ? cn_translations : {}
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved preferences
    loadUserPreferences();
    
    // Initialize current page
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeIndexPage();
            break;
        case 'test':
            initializeTestPage();
            break;
        case 'result':
            initializeResultPage();
            break;
    }
    
    // Set up common event listeners
    setupCommonEventListeners();
    
    // Apply translations
    applyTranslations();
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('test.html')) return 'test';
    if (path.includes('result.html')) return 'result';
    return 'index';
}

// User Preferences
function loadUserPreferences() {
    const savedLanguage = localStorage.getItem('politest_language');
    
    if (savedLanguage && ['ko', 'en', 'jp', 'cn'].includes(savedLanguage)) {
        currentLanguage = savedLanguage;
    }
    
    // Update UI elements
    updateLanguageSelect();
}

function saveUserPreferences() {
    localStorage.setItem('politest_language', currentLanguage);
}

// Common Event Listeners
function setupCommonEventListeners() {
    // Language selection buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            currentLanguage = this.dataset.lang;
            applyTranslations();
            updateLanguageSelect();
            saveUserPreferences();
        });
    });
    

    
    // Prevent back navigation during test
    if (getCurrentPage() === 'test') {
        window.addEventListener('beforeunload', function(e) {
            e.preventDefault();
            e.returnValue = '';
        });
        
        window.addEventListener('popstate', function(e) {
            e.preventDefault();
            showBackConfirmation();
        });
    }
}



function updateLanguageSelect() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

// Translation System
function applyTranslations() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Index Page Functions
function initializeIndexPage() {
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.addEventListener('click', startTest);
    }
}

function startTest() {
    const userName = document.getElementById('userName').value.trim();
    currentUser = userName || translations[currentLanguage].defaultName || '익명';
    
    // Prepare questions
    if (typeof questionsData !== 'undefined') {
        questions = questionsData;
        selectedQuestions = selectRandomQuestions(questions, 15);
        shuffleArray(selectedQuestions);
        
        // Save test data
        localStorage.setItem('politest_user', currentUser);
        localStorage.setItem('politest_questions', JSON.stringify(selectedQuestions));
        localStorage.setItem('politest_answers', JSON.stringify([]));
        localStorage.setItem('politest_current_index', '0');
        
        // Navigate to test page
        window.location.href = 'test.html';
    }
}

// Test Page Functions
function initializeTestPage() {
    // Load test data
    currentUser = localStorage.getItem('politest_user') || '';
    const questionsJson = localStorage.getItem('politest_questions');
    const answersJson = localStorage.getItem('politest_answers');
    const currentIndex = localStorage.getItem('politest_current_index');
    
    if (!questionsJson) {
        // Redirect back to start if no test data
        window.location.href = 'index.html';
        return;
    }
    
    selectedQuestions = JSON.parse(questionsJson);
    userAnswers = answersJson ? JSON.parse(answersJson) : [];
    currentQuestionIndex = currentIndex ? parseInt(currentIndex) : 0;
    
    // Set up test page event listeners
    setupTestEventListeners();
    
    // Display current question
    displayQuestion();
    updateProgress();
}

function setupTestEventListeners() {
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', showBackConfirmation);
    }
    
    // Modal buttons
    const modalCancel = document.getElementById('modalCancel');
    const modalConfirm = document.getElementById('modalConfirm');
    
    if (modalCancel) {
        modalCancel.addEventListener('click', hideBackConfirmation);
    }
    
    if (modalConfirm) {
        modalConfirm.addEventListener('click', confirmExit);
    }
}

function displayQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        finishTest();
        return;
    }
    
    const question = selectedQuestions[currentQuestionIndex];
    const questionCard = document.getElementById('questionCard');
    const questionNumber = document.getElementById('questionNumber');
    const questionText = document.getElementById('questionText');
    const answersContainer = document.getElementById('answersContainer');
    
    // Update question content
    if (questionNumber) {
        const questionLabel = translations[currentLanguage].questionLabel || '질문';
        questionNumber.textContent = `${questionLabel} ${currentQuestionIndex + 1}`;
    }
    
    if (questionText) {
        questionText.textContent = question.question[currentLanguage] || question.question.ko;
    }
    
    // Clear and populate answers
    if (answersContainer) {
        answersContainer.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
            const answerBtn = document.createElement('button');
            answerBtn.className = 'answer-btn';
            answerBtn.textContent = answer.text[currentLanguage] || answer.text.ko;
            answerBtn.addEventListener('click', () => selectAnswer(index, answer.score));
            answersContainer.appendChild(answerBtn);
        });
    }
    
    // Animate question entry
    if (questionCard) {
        questionCard.classList.remove('exit');
        questionCard.classList.add('active');
    }
}

function selectAnswer(answerIndex, score) {
    // Save answer
    userAnswers[currentQuestionIndex] = {
        questionIndex: currentQuestionIndex,
        answerIndex: answerIndex,
        score: score
    };
    
    // Update localStorage
    localStorage.setItem('politest_answers', JSON.stringify(userAnswers));
    
    // Animate transition
    const questionCard = document.getElementById('questionCard');
    if (questionCard) {
        questionCard.classList.remove('active');
        questionCard.classList.add('exit');
    }
    
    // Move to next question after animation
    setTimeout(() => {
        currentQuestionIndex++;
        localStorage.setItem('politest_current_index', currentQuestionIndex.toString());
        
        if (currentQuestionIndex >= selectedQuestions.length) {
            finishTest();
        } else {
            displayQuestion();
            updateProgress();
        }
    }, 300);
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    const progress = ((currentQuestionIndex) / selectedQuestions.length) * 100;
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${currentQuestionIndex} / ${selectedQuestions.length}`;
    }
}

function finishTest() {
    // Show loading
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
    
    // Calculate results after a short delay for better UX
    setTimeout(() => {
        calculateResults();
        
        // Save results and navigate
        localStorage.setItem('politest_result', JSON.stringify({
            user: currentUser,
            score: totalScore,
            answers: userAnswers,
            timestamp: Date.now()
        }));
        
        // Clear test progress data
        localStorage.removeItem('politest_questions');
        localStorage.removeItem('politest_answers');
        localStorage.removeItem('politest_current_index');
        
        window.location.href = 'result.html';
    }, 2000);
}

function calculateResults() {
    totalScore = 0;
    userAnswers.forEach(answer => {
        totalScore += answer.score;
    });
    
    // Save result to database
    saveResultToDatabase();
}

async function saveResultToDatabase() {
    try {
        const resultType = determineResultType(totalScore);
        
        const userData = {
            name: currentUser === '익명' ? null : currentUser,
            language: currentLanguage
        };
        
        const testData = {
            totalScore: totalScore,
            resultType: resultType,
            answers: userAnswers,
            questionsUsed: selectedQuestions.map(q => q.id)
        };
        
        const response = await fetch('/api/save-result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: userData,
                testResult: testData
            })
        });
        
        const result = await response.json();
        if (result.success) {
            console.log('Test result saved successfully');
        } else {
            console.warn('Failed to save test result:', result.error);
        }
    } catch (error) {
        console.warn('Error saving test result:', error);
        // Continue with the application flow even if saving fails
    }
}

// Result Page Functions
function initializeResultPage() {
    const resultData = localStorage.getItem('politest_result');
    
    if (!resultData) {
        window.location.href = 'index.html';
        return;
    }
    
    const result = JSON.parse(resultData);
    displayResult(result);
    setupResultEventListeners();
}

function displayResult(result) {
    const resultCard = document.getElementById('resultCard');
    if (!resultCard) return;
    
    const resultType = determineResultType(result.score);
    const resultInfo = typeof resultsData !== 'undefined' ? resultsData[resultType] : null;
    
    if (!resultInfo) return;
    
    // Create result content
    const resultHTML = `
        <div class="result-icon ${resultType}">
            <i class="${resultInfo.icon}"></i>
        </div>
        <h2 class="result-title">${resultInfo.title[currentLanguage] || resultInfo.title.ko}</h2>
        <p class="result-description">${resultInfo.description[currentLanguage] || resultInfo.description.ko}</p>
    `;
    
    resultCard.innerHTML = resultHTML;
    
    // Remove other results display as requested
    // displayOtherResults(resultType);
}

function determineResultType(score) {
    if (typeof resultsData === 'undefined') return 'moderate';
    
    // Score ranges for 5 categories (0-30 points)
    if (score >= 25) return 'liberal_progressive';      // 25-30: 진보적 자유주의자
    if (score >= 20) return 'moderate';                 // 20-24: 중도 성향
    if (score >= 15) return 'progressive_authoritarian'; // 15-19: 진보적 권위주의자
    if (score >= 8) return 'conservative_liberal';      // 8-14: 보수적 자유주의자
    return 'conservative_authoritarian';                // 0-7: 보수적 권위주의자
}

function displayOtherResults(currentType) {
    const otherTypes = document.getElementById('otherTypes');
    if (!otherTypes || typeof resultsData === 'undefined') return;
    
    const allTypes = Object.keys(resultsData);
    const otherTypesList = allTypes.filter(type => type !== currentType);
    
    otherTypes.innerHTML = '';
    
    otherTypesList.forEach(type => {
        const resultInfo = resultsData[type];
        const otherTypeDiv = document.createElement('div');
        otherTypeDiv.className = 'other-type';
        
        otherTypeDiv.innerHTML = `
            <div class="result-icon ${type}">
                <i class="${resultInfo.icon}"></i>
            </div>
            <h4>${resultInfo.title[currentLanguage] || resultInfo.title.ko}</h4>
            <p style="font-size: 0.9rem; color: #888; margin-top: 5px;">
                ${resultInfo.shortDesc[currentLanguage] || resultInfo.shortDesc.ko}
            </p>
        `;
        
        otherTypes.appendChild(otherTypeDiv);
    });
}

function setupResultEventListeners() {
    // Restart button
    const restartButton = document.getElementById('restartButton');
    if (restartButton) {
        restartButton.addEventListener('click', function() {
            localStorage.removeItem('politest_result');
            window.location.href = 'index.html';
        });
    }
    
    // Statistics button
    const showStatsButton = document.getElementById('showStatsButton');
    const closeStatsButton = document.getElementById('closeStatsButton');
    const statisticsModal = document.getElementById('statisticsModal');
    
    if (showStatsButton) {
        showStatsButton.addEventListener('click', showStatistics);
    }
    
    if (closeStatsButton) {
        closeStatsButton.addEventListener('click', hideStatistics);
    }
    
    if (statisticsModal) {
        statisticsModal.addEventListener('click', function(e) {
            if (e.target === statisticsModal) {
                hideStatistics();
            }
        });
    }
    
    // Share buttons
    setupShareButtons();
}

async function showStatistics() {
    const modal = document.getElementById('statisticsModal');
    const statsData = document.getElementById('statsData');
    
    if (!modal || !statsData) return;
    
    try {
        // Show loading
        statsData.innerHTML = '<div class="stats-loading"><i class="fas fa-spinner fa-spin"></i> 통계를 불러오는 중...</div>';
        modal.classList.add('active');
        
        const response = await fetch('/api/statistics');
        const stats = await response.json();
        
        if (stats) {
            displayStatistics(stats);
        } else {
            statsData.innerHTML = '<div class="stats-error">통계를 불러올 수 없습니다.</div>';
        }
    } catch (error) {
        console.error('Error loading statistics:', error);
        statsData.innerHTML = '<div class="stats-error">통계를 불러올 수 없습니다.</div>';
    }
}

function displayStatistics(stats) {
    const statsData = document.getElementById('statsData');
    if (!statsData) return;
    
    const resultTypeNames = {
        'liberal_progressive': '진보적 자유주의자',
        'moderate': '중도 성향',
        'progressive_authoritarian': '진보적 권위주의자',
        'conservative_liberal': '보수적 자유주의자',
        'conservative_authoritarian': '보수적 권위주의자'
    };
    
    const languageNames = {
        'ko': 'KO',
        'en': 'EN',
        'jp': 'JP',
        'cn': 'CN'
    };
    
    let html = `
        <div class="stats-item">
            <h4>총 테스트 참여자</h4>
            <div class="stats-value">${stats.totalTests.toLocaleString()}명</div>
        </div>
        
        <div class="stats-item">
            <h4>정치 성향별 분포</h4>
            <div class="stats-chart">
    `;
    
    stats.resultTypes.forEach(type => {
        const percentage = ((type.count / stats.totalTests) * 100).toFixed(1);
        const name = resultTypeNames[type.result_type] || type.result_type;
        html += `
            <div class="stats-bar">
                <div class="stats-bar-label">${name}</div>
                <div class="stats-bar-container">
                    <div class="stats-bar-fill" style="width: ${percentage}%"></div>
                    <div class="stats-bar-text">${type.count}명 (${percentage}%)</div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
        
        <div class="stats-item">
            <h4>언어별 참여자</h4>
            <div class="stats-languages">
    `;
    
    stats.languages.forEach(lang => {
        const percentage = ((lang.count / stats.totalTests) * 100).toFixed(1);
        const name = languageNames[lang.language] || lang.language;
        html += `
            <div class="stats-lang-item">
                <span class="stats-lang-name">${name}</span>
                <span class="stats-lang-count">${lang.count}명 (${percentage}%)</span>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    statsData.innerHTML = html;
}

function hideStatistics() {
    const modal = document.getElementById('statisticsModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function setupShareButtons() {
    const shareKakao = document.getElementById('shareKakao');
    const shareLine = document.getElementById('shareLine');
    const shareWhatsapp = document.getElementById('shareWhatsapp');
    const shareWechat = document.getElementById('shareWechat');
    const copyLink = document.getElementById('copyLink');
    
    const shareText = translations[currentLanguage].shareText || '정치 성향 테스트 결과를 확인해보세요!';
    const shareUrl = window.location.origin + window.location.pathname.replace('result.html', 'index.html');
    
    if (shareKakao) {
        shareKakao.addEventListener('click', () => shareToKakao(shareText, shareUrl));
    }
    
    if (shareLine) {
        shareLine.addEventListener('click', () => shareToLine(shareText, shareUrl));
    }
    
    if (shareWhatsapp) {
        shareWhatsapp.addEventListener('click', () => shareToWhatsapp(shareText, shareUrl));
    }
    
    if (shareWechat) {
        shareWechat.addEventListener('click', () => shareToWechat(shareText, shareUrl));
    }
    
    if (copyLink) {
        copyLink.addEventListener('click', () => copyLinkToClipboard(shareUrl));
    }
}

// Share Functions
function shareToKakao(text, url) {
    const kakaoUrl = `https://story.kakao.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(kakaoUrl, '_blank', 'width=600,height=600');
}

function shareToLine(text, url) {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(lineUrl, '_blank', 'width=600,height=600');
}

function shareToWhatsapp(text, url) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}

function shareToWechat(text, url) {
    // WeChat sharing is more complex and typically requires their SDK
    // For now, we'll copy the link and show instructions
    copyLinkToClipboard(url);
    showToast(translations[currentLanguage].wechatShareMessage || 'WeChat에서 공유하려면 링크를 붙여넣기 하세요.');
}

function copyLinkToClipboard(url) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast(translations[currentLanguage].linkCopied || '링크가 복사되었습니다!');
        }).catch(() => {
            fallbackCopyText(url);
        });
    } else {
        fallbackCopyText(url);
    }
}

function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast(translations[currentLanguage].linkCopied || '링크가 복사되었습니다!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.getElementById('copyToast');
    if (toast) {
        const toastMessage = document.getElementById('toastMessage');
        if (toastMessage) {
            toastMessage.textContent = message;
        }
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Modal Functions
function showBackConfirmation() {
    const modal = document.getElementById('backModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function hideBackConfirmation() {
    const modal = document.getElementById('backModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function confirmExit() {
    // Clear test data
    localStorage.removeItem('politest_questions');
    localStorage.removeItem('politest_answers');
    localStorage.removeItem('politest_current_index');
    
    // Navigate back to start
    window.location.href = 'index.html';
}

// Utility Functions
function selectRandomQuestions(allQuestions, count) {
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // In production, you might want to show a user-friendly error message
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you want to add PWA support
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}
