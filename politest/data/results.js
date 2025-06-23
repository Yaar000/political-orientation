// Political Orientation Test Results Data
// 5 categories based on score ranges (0-30 points total)

const resultsData = {
    // 25-30 points: Progressive Liberal
    liberal_progressive: {
        id: 'liberal_progressive',
        title: {
            ko: '진보적 자유주의자',
            en: 'Progressive Liberal',
            jp: '進歩的自由主義者',
            cn: '进步自由主义者'
        },
        shortDesc: {
            ko: '사회적 약자 보호, 다양성 중시',
            en: 'Protecting the vulnerable, valuing diversity',
            jp: '社会的弱者保護、多様性重視',
            cn: '保护社会弱势群体，重视多样性'
        },
        description: {
            ko: '당신은 사회적 약자를 보호하고 다양성을 중시하는 진보적 자유주의 성향을 가지고 있습니다. 평등한 사회를 만들기 위해 적극적인 정부 역할이 필요하다고 생각하며, 개인의 자유와 권리를 매우 중요하게 여깁니다. 환경보호, 인권 신장, 사회 복지 확대에 관심이 많고, 전통적 가치보다는 변화와 혁신을 선호합니다.',
            en: 'You have a progressive liberal orientation that prioritizes protecting the socially disadvantaged and valuing diversity. You believe active government intervention is necessary to create an equal society, and you highly value individual freedom and rights. You are interested in environmental protection, human rights advancement, and welfare expansion, preferring change and innovation over traditional values.',
            jp: 'あなたは社会的弱者を保護し、多様性を重視する進歩的自由主義的傾向を持っています。平等な社会を作るために積極的な政府の役割が必要だと考え、個人の自由と権利を非常に重要視します。環境保護、人権伸長、社会福祉拡大に関心が高く、伝統的価値よりも変化と革新を好みます。',
            cn: '您具有进步自由主义倾向，优先保护社会弱势群体并重视多样性。您认为需要政府积极干预来创造平等社会，非常重视个人自由和权利。您对环境保护、人权发展、社会福利扩大很感兴趣，比起传统价值更偏好变化和创新。'
        },
        characteristics: {
            ko: ['사회 정의 추구', '다양성 존중', '환경 보호 중시', '인권 신장 지지', '복지 국가 선호'],
            en: ['Pursuing social justice', 'Respecting diversity', 'Prioritizing environmental protection', 'Supporting human rights', 'Preferring welfare state'],
            jp: ['社会正義の追求', '多様性の尊重', '環境保護重視', '人権伸長支持', '福祉国家選好'],
            cn: ['追求社会正义', '尊重多样性', '重视环境保护', '支持人权发展', '偏好福利国家']
        },
        icon: 'fas fa-heart',
        color: '#ff6b6b'
    },

    // 20-24 points: Moderate
    moderate: {
        id: 'moderate',
        title: {
            ko: '중도 성향',
            en: 'Moderate',
            jp: '中道傾向',
            cn: '中间倾向'
        },
        shortDesc: {
            ko: '실용주의, 상황에 따른 판단',
            en: 'Pragmatism, situational judgment',
            jp: '実用主義、状況に応じた判断',
            cn: '实用主义，根据情况判断'
        },
        description: {
            ko: '당신은 상황에 따라 보수와 진보 입장을 넘나드는 중도적 성향을 가지고 있습니다. 이념보다는 실용성을 중시하며, 극단적인 입장보다는 균형잡힌 접근을 선호합니다. 사회 문제에 대해 다각도로 검토하고, 현실적이고 합리적인 해결책을 찾으려 노력합니다. 변화의 필요성은 인정하지만 급진적 변화보다는 점진적 개선을 선호합니다.',
            en: 'You have a moderate orientation that moves between conservative and progressive positions depending on the situation. You value practicality over ideology and prefer balanced approaches rather than extreme positions. You examine social issues from multiple angles and strive to find realistic and rational solutions. While you acknowledge the need for change, you prefer gradual improvement over radical transformation.',
            jp: 'あなたは状況に応じて保守と進歩の立場を行き来する中道的傾向を持っています。イデオロギーよりも実用性を重視し、極端な立場よりもバランスの取れたアプローチを好みます。社会問題について多角的に検討し、現実的で合理的な解決策を見つけようと努力します。変化の必要性は認めますが、急進的変化よりも段階的改善を好みます。',
            cn: '您具有中间倾向，会根据情况在保守和进步立场之间灵活转换。您重视实用性胜过意识形态，偏好平衡的方法而非极端立场。您会从多个角度审视社会问题，努力寻找现实和合理的解决方案。虽然您承认变化的必要性，但更偏好渐进改善而非激进变革。'
        },
        characteristics: {
            ko: ['실용주의적 접근', '균형감각', '점진적 개선', '현실적 해결책', '상황 맞춤형 정책'],
            en: ['Pragmatic approach', 'Sense of balance', 'Gradual improvement', 'Realistic solutions', 'Context-specific policies'],
            jp: ['実用主義的アプローチ', 'バランス感覚', '段階的改善', '現実的解決策', '状況対応型政策'],
            cn: ['实用主义方法', '平衡感', '渐进改善', '现实解决方案', '因地制宜政策']
        },
        icon: 'fas fa-compass',
        color: '#8e9eab'
    },

    // 15-19 points: Progressive Authoritarian
    progressive_authoritarian: {
        id: 'progressive_authoritarian',
        title: {
            ko: '진보적 권위주의자',
            en: 'Progressive Authoritarian',
            jp: '進歩的権威主義者',
            cn: '进步威权主义者'
        },
        shortDesc: {
            ko: '경제적 평등, 일정한 제한 필요',
            en: 'Economic equality, certain restrictions needed',
            jp: '経済的平等、一定の制限必要',
            cn: '经济平等，需要一定限制'
        },
        description: {
            ko: '당신은 경제적 평등을 중시하지만 표현의 자유에는 일정한 제한이 필요하다고 보는 진보적 권위주의 성향을 가지고 있습니다. 사회 전체의 이익을 위해서는 개인의 자유가 어느 정도 제한될 수 있다고 생각합니다. 강력한 정부 주도의 사회 개혁을 지지하며, 경제적 불평등 해소를 위해 적극적인 정책이 필요하다고 봅니다.',
            en: 'You have a progressive authoritarian orientation that values economic equality but believes certain restrictions on freedom of expression are necessary. You think individual freedom can be somewhat limited for the benefit of society as a whole. You support strong government-led social reforms and believe active policies are needed to address economic inequality.',
            jp: 'あなたは経済的平等を重視するが、表現の自由には一定の制限が必要だと考える進歩的権威主義的傾向を持っています。社会全体の利益のためには個人の自由がある程度制限されうると考えます。強力な政府主導の社会改革を支持し、経済的不平等解消のために積極的な政策が必要だと考えます。',
            cn: '您具有进步威权主义倾向，重视经济平等但认为表达自由需要一定限制。您认为为了社会整体利益，个人自由可以在一定程度上受到限制。您支持强有力的政府主导社会改革，认为需要积极政策来解决经济不平等问题。'
        },
        characteristics: {
            ko: ['경제적 평등 추구', '강한 정부 역할', '집단 이익 우선', '사회 안정 중시', '계획경제 선호'],
            en: ['Pursuing economic equality', 'Strong government role', 'Collective interests first', 'Valuing social stability', 'Preferring planned economy'],
            jp: ['経済的平等追求', '強い政府役割', '集団利益優先', '社会安定重視', '計画経済選好'],
            cn: ['追求经济平等', '强政府作用', '集体利益优先', '重视社会稳定', '偏好计划经济']
        },
        icon: 'fas fa-fist-raised',
        color: '#fdbb2d'
    },

    // 8-14 points: Conservative Liberal
    conservative_liberal: {
        id: 'conservative_liberal',
        title: {
            ko: '보수적 자유주의자',
            en: 'Conservative Liberal',
            jp: '保守的自由主義者',
            cn: '保守自由主义者'
        },
        shortDesc: {
            ko: '시장의 자유, 질서와 안정',
            en: 'Market freedom, order and stability',
            jp: '市場の自由、秩序と安定',
            cn: '市场自由，秩序与稳定'
        },
        description: {
            ko: '당신은 시장의 자유를 중시하고 질서와 안정을 추구하는 보수적 자유주의 성향을 가지고 있습니다. 개인의 자유와 책임을 동시에 강조하며, 정부의 시장 개입보다는 자유경쟁을 통한 문제 해결을 선호합니다. 전통적 가치를 존중하면서도 개인의 권리는 보장되어야 한다고 생각합니다. 점진적이고 안정적인 사회 발전을 지지합니다.',
            en: 'You have a conservative liberal orientation that values market freedom and pursues order and stability. You emphasize both individual freedom and responsibility, preferring problem-solving through free competition over government market intervention. While respecting traditional values, you believe individual rights should be guaranteed. You support gradual and stable social development.',
            jp: 'あなたは市場の自由を重視し、秩序と安定を追求する保守的自由主義的傾向を持っています。個人の自由と責任を同時に強調し、政府の市場介入よりも自由競争を通じた問題解決を好みます。伝統的価値を尊重しながらも個人の権利は保障されるべきだと考えます。段階的で安定的な社会発展を支持します。',
            cn: '您具有保守自由主义倾向，重视市场自由并追求秩序与稳定。您同时强调个人自由和责任，偏好通过自由竞争而非政府市场干预来解决问题。在尊重传统价值的同时，您认为应该保障个人权利。您支持渐进而稳定的社会发展。'
        },
        characteristics: {
            ko: ['자유시장 선호', '개인 책임 강조', '법치주의 지지', '점진적 변화', '전통과 혁신의 조화'],
            en: ['Preferring free market', 'Emphasizing personal responsibility', 'Supporting rule of law', 'Gradual change', 'Harmony of tradition and innovation'],
            jp: ['自由市場選好', '個人責任強調', '法治主義支持', '段階的変化', '伝統と革新の調和'],
            cn: ['偏好自由市场', '强调个人责任', '支持法治', '渐进变化', '传统与创新和谐']
        },
        icon: 'fas fa-balance-scale',
        color: '#4ecdc4'
    },

    // 0-7 points: Conservative Authoritarian
    conservative_authoritarian: {
        id: 'conservative_authoritarian',
        title: {
            ko: '보수적 권위주의자',
            en: 'Conservative Authoritarian',
            jp: '保守的権威主義者',
            cn: '保守威权主义者'
        },
        shortDesc: {
            ko: '강한 국가, 전통적 가치',
            en: 'Strong state, traditional values',
            jp: '強い国家、伝統的価値',
            cn: '强国家，传统价值'
        },
        description: {
            ko: '당신은 강한 국가와 안보를 중시하고 전통적 가치를 강조하는 보수적 권위주의 성향을 가지고 있습니다. 사회 질서와 안정이 개인의 자유보다 우선된다고 생각하며, 전통적인 제도와 관습을 중요하게 여깁니다. 국가의 권위와 지도력을 신뢰하고, 급진적 변화보다는 기존 체제의 유지와 발전을 선호합니다.',
            en: 'You have a conservative authoritarian orientation that emphasizes a strong state and security while stressing traditional values. You believe social order and stability take precedence over individual freedom, and you value traditional institutions and customs. You trust state authority and leadership, preferring the maintenance and development of existing systems over radical change.',
            jp: 'あなたは強い国家と安保を重視し、伝統的価値を強調する保守的権威主義的傾向を持っています。社会秩序と安定が個人の自由より優先されると考え、伝統的な制度と慣習を重要視します。国家の権威と指導力を信頼し、急進的変化よりも既存体制の維持と発展を好みます。',
            cn: '您具有保守威权主义倾向，重视强国家和安全，强调传统价值。您认为社会秩序和稳定优先于个人自由，重视传统制度和习俗。您信任国家权威和领导力，偏好维护和发展现有体制而非激进变革。'
        },
        characteristics: {
            ko: ['국가 권위 존중', '전통 가치 수호', '사회 질서 우선', '안보 중시', '점진적 발전'],
            en: ['Respecting state authority', 'Defending traditional values', 'Prioritizing social order', 'Emphasizing security', 'Gradual development'],
            jp: ['国家権威尊重', '伝統価値守護', '社会秩序優先', '安保重視', '段階的発展'],
            cn: ['尊重国家权威', '维护传统价值', '社会秩序优先', '重视安全', '渐进发展']
        },
        icon: 'fas fa-shield-alt',
        color: '#667eea'
    }
};

// Score calculation and result determination functions
function calculateDetailedScore(answers) {
    const categories = {
        social: 0,      // 사회 이슈
        economic: 0,    // 경제 이슈
        political: 0,   // 정치 이슈
        cultural: 0     // 문화 이슈
    };
    
    // Categorize questions by topic (this is a simplified categorization)
    const questionCategories = {
        social: [2, 4, 5, 11, 12, 19, 25, 27],      // 사회 관련 질문들
        economic: [0, 1, 9, 10, 16, 22, 23, 28],    // 경제 관련 질문들
        political: [6, 7, 13, 14, 17, 20, 24, 29],  // 정치 관련 질문들
        cultural: [3, 8, 15, 18, 21, 26, 30]        // 문화 관련 질문들
    };
    
    answers.forEach((answer, index) => {
        for (const [category, questions] of Object.entries(questionCategories)) {
            if (questions.includes(index)) {
                categories[category] += answer.score;
                break;
            }
        }
    });
    
    return categories;
}

function getResultRecommendations(resultType) {
    const recommendations = {
        liberal_progressive: {
            ko: ['환경 보호 단체 참여', '인권 운동 지원', '사회적 기업 이용', '다문화 이해 프로그램 참여'],
            en: ['Join environmental protection groups', 'Support human rights movements', 'Use social enterprises', 'Participate in multicultural understanding programs'],
            jp: ['環境保護団体参加', '人権運動支援', '社会的企業利用', '多文化理解プログラム参加'],
            cn: ['参与环保组织', '支持人权运动', '使用社会企业', '参加多元文化理解项目']
        },
        moderate: {
            ko: ['다양한 정치 의견 청취', '시민 토론회 참여', '정책 연구 자료 읽기', '지역 사회 활동 참여'],
            en: ['Listen to diverse political opinions', 'Participate in civic forums', 'Read policy research materials', 'Engage in community activities'],
            jp: ['多様な政治意見聴取', '市民討論会参加', '政策研究資料読書', '地域社会活動参加'],
            cn: ['听取多样政治观点', '参与公民论坛', '阅读政策研究材料', '参与社区活动']
        },
        progressive_authoritarian: {
            ko: ['노동조합 활동 참여', '사회 정의 운동 지원', '경제 정책 연구', '집단 행동 참여'],
            en: ['Participate in labor union activities', 'Support social justice movements', 'Study economic policies', 'Join collective actions'],
            jp: ['労働組合活動参加', '社会正義運動支援', '経済政策研究', '集団行動参加'],
            cn: ['参与工会活动', '支持社会正义运动', '研究经济政策', '参与集体行动']
        },
        conservative_liberal: {
            ko: ['경제 학습 및 투자', '법률 제도 이해', '기업가 정신 개발', '시장 경제 연구'],
            en: ['Economic learning and investment', 'Understanding legal systems', 'Developing entrepreneurship', 'Studying market economy'],
            jp: ['経済学習と投資', '法律制度理解', '起業家精神開発', '市場経済研究'],
            cn: ['经济学习与投资', '了解法律制度', '培养企业家精神', '研究市场经济']
        },
        conservative_authoritarian: {
            ko: ['전통 문화 보존 활동', '국가 정책 지지', '사회 질서 유지 활동', '역사 교육 참여'],
            en: ['Traditional culture preservation activities', 'Supporting national policies', 'Social order maintenance activities', 'Participating in history education'],
            jp: ['伝統文化保存活動', '国家政策支持', '社会秩序維持活動', '歴史教育参加'],
            cn: ['传统文化保护活动', '支持国家政策', '社会秩序维护活动', '参与历史教育']
        }
    };
    
    return recommendations[resultType] || recommendations.moderate;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        resultsData,
        calculateDetailedScore,
        getResultRecommendations
    };
}
