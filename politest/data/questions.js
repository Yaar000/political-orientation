// Political Orientation Test Questions
// Each question has 3 answers: Progressive (2 points), Moderate (1 point), Conservative (0 points)

const questionsData = [
    {
        id: 1,
        question: {
            ko: "부자에게 더 많은 세금을 부과해야 한다고 생각하나요?",
            en: "Do you think wealthy people should pay higher taxes?",
            jp: "富裕層はより多くの税金を払うべきだと思いますか？",
            cn: "您认为富人应该缴纳更多税款吗？"
        },
        answers: [
            {
                text: {
                    ko: "그렇다. 소득 재분배가 필요하다",
                    en: "Yes, income redistribution is necessary",
                    jp: "はい、所得の再分配が必要です",
                    cn: "是的，需要收入再分配"
                },
                score: 2
            },
            {
                text: {
                    ko: "적당한 수준에서는 필요하다",
                    en: "Yes, but within reasonable limits",
                    jp: "適度なレベルで必要です",
                    cn: "适度水平是必要的"
                },
                score: 1
            },
            {
                text: {
                    ko: "아니다. 개인의 노력에 따른 결과다",
                    en: "No, it's the result of individual effort",
                    jp: "いいえ、個人の努力の結果です",
                    cn: "不，这是个人努力的结果"
                },
                score: 0
            }
        ]
    },
    {
        id: 2,
        question: {
            ko: "국가가 경제에 적극적으로 개입해야 한다고 생각하나요?",
            en: "Should the government actively intervene in the economy?",
            jp: "国家は経済に積極的に介入すべきだと思いますか？",
            cn: "国家应该积极干预经济吗？"
        },
        answers: [
            {
                text: {
                    ko: "그렇다. 시장 실패를 보완해야 한다",
                    en: "Yes, to correct market failures",
                    jp: "はい、市場の失敗を補完すべきです",
                    cn: "是的，应该弥补市场失灵"
                },
                score: 2
            },
            {
                text: {
                    ko: "필요한 분야에서만 제한적으로",
                    en: "Only in necessary areas, with limitations",
                    jp: "必要な分野でのみ限定的に",
                    cn: "仅在必要领域有限介入"
                },
                score: 1
            },
            {
                text: {
                    ko: "아니다. 자유시장에 맡겨야 한다",
                    en: "No, leave it to the free market",
                    jp: "いいえ、自由市場に任せるべきです",
                    cn: "不，应该交给自由市场"
                },
                score: 0
            }
        ]
    },
    {
        id: 3,
        question: {
            ko: "동성결혼을 법적으로 인정해야 한다고 생각하나요?",
            en: "Should same-sex marriage be legally recognized?",
            jp: "同性結婚を法的に認めるべきだと思いますか？",
            cn: "应该在法律上承认同性婚姻吗？"
        },
        answers: [
            {
                text: {
                    ko: "그렇다. 모든 사람의 권리다",
                    en: "Yes, it's everyone's right",
                    jp: "はい、すべての人の権利です",
                    cn: "是的，这是每个人的权利"
                },
                score: 2
            },
            {
                text: {
                    ko: "사회적 합의가 필요하다",
                    en: "Social consensus is needed",
                    jp: "社会的合意が必要です",
                    cn: "需要社会共识"
                },
                score: 1
            },
            {
                text: {
                    ko: "아니다. 전통적 가족 제도를 지켜야 한다",
                    en: "No, traditional family values should be preserved",
                    jp: "いいえ、伝統的な家族制度を守るべきです",
                    cn: "不，应该维护传统家庭制度"
                },
                score: 0
            }
        ]
    },
    {
        id: 4,
        question: {
            ko: "환경보호를 위해 경제성장을 포기할 수 있나요?",
            en: "Can economic growth be sacrificed for environmental protection?",
            jp: "環境保護のために経済成長を諦めることができますか？",
            cn: "可以为了环境保护而放弃经济增长吗？"
        },
        answers: [
            {
                text: {
                    ko: "그렇다. 지구가 더 중요하다",
                    en: "Yes, the planet is more important",
                    jp: "はい、地球の方が重要です",
                    cn: "是的，地球更重要"
                },
                score: 2
            },
            {
                text: {
                    ko: "균형을 맞춰야 한다",
                    en: "We need to find a balance",
                    jp: "バランスを取るべきです",
                    cn: "需要平衡"
                },
                score: 1
            },
            {
                text: {
                    ko: "아니다. 경제가 우선이다",
                    en: "No, economy comes first",
                    jp: "いいえ、経済が優先です",
                    cn: "不，经济优先"
                },
                score: 0
            }
        ]
    },
    {
        id: 5,
        question: {
            ko: "사회적 약자를 위한 복지 확대에 찬성하나요?",
            en: "Do you support expanding welfare for the socially disadvantaged?",
            jp: "社会的弱者のための福祉拡大に賛成ですか？",
            cn: "您支持扩大对社会弱势群体的福利吗？"
        },
        answers: [
            {
                text: {
                    ko: "적극 찬성한다",
                    en: "Strongly support",
                    jp: "積極的に賛成します",
                    cn: "强烈支持"
                },
                score: 2
            },
            {
                text: {
                    ko: "필요한 수준에서 찬성한다",
                    en: "Support at necessary levels",
                    jp: "必要なレベルで賛成します",
                    cn: "在必要水平上支持"
                },
                score: 1
            },
            {
                text: {
                    ko: "개인의 책임이 우선이다",
                    en: "Individual responsibility comes first",
                    jp: "個人の責任が優先です",
                    cn: "个人责任优先"
                },
                score: 0
            }
        ]
    },
    {
        id: 6,
        question: {
            ko: "다문화 사회로의 변화를 어떻게 생각하나요?",
            en: "What do you think about the transition to a multicultural society?",
            jp: "多文化社会への変化をどう思いますか？",
            cn: "您如何看待向多元文化社会的转变？"
        },
        answers: [
            {
                text: {
                    ko: "환영한다. 다양성이 좋다",
                    en: "Welcome it. Diversity is good",
                    jp: "歓迎します。多様性は良いことです",
                    cn: "欢迎，多样性是好的"
                },
                score: 2
            },
            {
                text: {
                    ko: "점진적 변화가 필요하다",
                    en: "Gradual change is needed",
                    jp: "段階的な変化が必要です",
                    cn: "需要渐进式变化"
                },
                score: 1
            },
            {
                text: {
                    ko: "우리 문화를 먼저 지켜야 한다",
                    en: "We should preserve our culture first",
                    jp: "まず我々の文化を守るべきです",
                    cn: "应该先保护我们的文化"
                },
                score: 0
            }
        ]
    },
    {
        id: 7,
        question: {
            ko: "언론의 자유에 대해 어떻게 생각하나요?",
            en: "What do you think about freedom of the press?",
            jp: "報道の自由についてどう思いますか？",
            cn: "您如何看待新闻自由？"
        },
        answers: [
            {
                text: {
                    ko: "절대적으로 보장되어야 한다",
                    en: "Should be absolutely guaranteed",
                    jp: "絶対的に保障されるべきです",
                    cn: "应该得到绝对保障"
                },
                score: 2
            },
            {
                text: {
                    ko: "책임이 따르는 자유여야 한다",
                    en: "Should be freedom with responsibility",
                    jp: "責任を伴う自由であるべきです",
                    cn: "应该是负责任的自由"
                },
                score: 1
            },
            {
                text: {
                    ko: "사회 안정을 위해 제한이 필요하다",
                    en: "Restrictions are needed for social stability",
                    jp: "社会安定のために制限が必要です",
                    cn: "为了社会稳定需要限制"
                },
                score: 0
            }
        ]
    },
    {
        id: 8,
        question: {
            ko: "북한과의 관계 개선에 대해 어떻게 생각하나요?",
            en: "What do you think about improving relations with North Korea?",
            jp: "北朝鮮との関係改善についてどう思いますか？",
            cn: "您如何看待改善与朝鲜的关系？"
        },
        answers: [
            {
                text: {
                    ko: "적극적으로 대화해야 한다",
                    en: "Should actively engage in dialogue",
                    jp: "積極的に対話すべきです",
                    cn: "应该积极对话"
                },
                score: 2
            },
            {
                text: {
                    ko: "조건부로 접근해야 한다",
                    en: "Should approach conditionally",
                    jp: "条件付きでアプローチすべきです",
                    cn: "应该有条件地接触"
                },
                score: 1
            },
            {
                text: {
                    ko: "안보가 우선이다",
                    en: "Security comes first",
                    jp: "安保が優先です",
                    cn: "安全优先"
                },
                score: 0
            }
        ]
    },
    {
        id: 9,
        question: {
            ko: "대학교육은 무료여야 한다고 생각하나요?",
            en: "Do you think university education should be free?",
            jp: "大学教育は無料であるべきだと思いますか？",
            cn: "您认为大学教育应该免费吗？"
        },
        answers: [
            {
                text: {
                    ko: "그렇다. 교육은 권리다",
                    en: "Yes, education is a right",
                    jp: "はい、教育は権利です",
                    cn: "是的，教育是权利"
                },
                score: 2
            },
            {
                text: {
                    ko: "장학금 제도로 지원해야 한다",
                    en: "Should support through scholarship system",
                    jp: "奨学金制度で支援すべきです",
                    cn: "应该通过奖学金制度支持"
                },
                score: 1
            },
            {
                text: {
                    ko: "개인이 부담해야 한다",
                    en: "Individuals should bear the cost",
                    jp: "個人が負担すべきです",
                    cn: "个人应该承担费用"
                },
                score: 0
            }
        ]
    },
    {
        id: 10,
        question: {
            ko: "최저임금 인상에 대해 어떻게 생각하나요?",
            en: "What do you think about raising the minimum wage?",
            jp: "最低賃金の引き上げについてどう思いますか？",
            cn: "您如何看待提高最低工资？"
        },
        answers: [
            {
                text: {
                    ko: "대폭 인상해야 한다",
                    en: "Should be significantly increased",
                    jp: "大幅に引き上げるべきです",
                    cn: "应该大幅提高"
                },
                score: 2
            },
            {
                text: {
                    ko: "점진적으로 인상해야 한다",
                    en: "Should be gradually increased",
                    jp: "段階的に引き上げるべきです",
                    cn: "应该逐步提高"
                },
                score: 1
            },
            {
                text: {
                    ko: "시장에 맡겨야 한다",
                    en: "Should be left to the market",
                    jp: "市場に任せるべきです",
                    cn: "应该交给市场"
                },
                score: 0
            }
        ]
    },
    {
        id: 11,
        question: {
            ko: "공공의료 확대에 대해 어떻게 생각하나요?",
            en: "What do you think about expanding public healthcare?",
            jp: "公共医療の拡大についてどう思いますか？",
            cn: "您如何看待扩大公共医疗？"
        },
        answers: [
            {
                text: {
                    ko: "적극 확대해야 한다",
                    en: "Should be actively expanded",
                    jp: "積極的に拡大すべきです",
                    cn: "应该积极扩大"
                },
                score: 2
            },
            {
                text: {
                    ko: "공공과 민간의 균형이 필요하다",
                    en: "Balance between public and private is needed",
                    jp: "公共と民間のバランスが必要です",
                    cn: "需要公共和私人的平衡"
                },
                score: 1
            },
            {
                text: {
                    ko: "민간 의료가 더 효율적이다",
                    en: "Private healthcare is more efficient",
                    jp: "民間医療の方が効率的です",
                    cn: "私人医疗更有效率"
                },
                score: 0
            }
        ]
    },
    {
        id: 12,
        question: {
            ko: "난민 수용에 대해 어떻게 생각하나요?",
            en: "What do you think about accepting refugees?",
            jp: "難民受け入れについてどう思いますか？",
            cn: "您如何看待接收难民？"
        },
        answers: [
            {
                text: {
                    ko: "적극적으로 수용해야 한다",
                    en: "Should be actively accepted",
                    jp: "積極的に受け入れるべきです",
                    cn: "应该积极接收"
                },
                score: 2
            },
            {
                text: {
                    ko: "제한적으로 수용해야 한다",
                    en: "Should be accepted with limitations",
                    jp: "制限的に受け入れるべきです",
                    cn: "应该有限制地接收"
                },
                score: 1
            },
            {
                text: {
                    ko: "우리나라 사정을 먼저 고려해야 한다",
                    en: "Our country's situation should be considered first",
                    jp: "まず我が国の事情を考慮すべきです",
                    cn: "应该先考虑我国情况"
                },
                score: 0
            }
        ]
    },
    {
        id: 13,
        question: {
            ko: "사형제에 대해 어떻게 생각하나요?",
            en: "What do you think about the death penalty?",
            jp: "死刑制度についてどう思いますか？",
            cn: "您如何看待死刑制度？"
        },
        answers: [
            {
                text: {
                    ko: "완전히 폐지해야 한다",
                    en: "Should be completely abolished",
                    jp: "完全に廃止すべきです",
                    cn: "应该完全废除"
                },
                score: 2
            },
            {
                text: {
                    ko: "매우 제한적으로만 적용해야 한다",
                    en: "Should be applied very restrictively",
                    jp: "非常に制限的にのみ適用すべきです",
                    cn: "应该非常有限地适用"
                },
                score: 1
            },
            {
                text: {
                    ko: "흉악범에게는 필요하다",
                    en: "Necessary for heinous criminals",
                    jp: "凶悪犯には必要です",
                    cn: "对恶性罪犯是必要的"
                },
                score: 0
            }
        ]
    },
    {
        id: 14,
        question: {
            ko: "군 복무에 대해 어떻게 생각하나요?",
            en: "What do you think about military service?",
            jp: "軍役についてどう思いますか？",
            cn: "您如何看待兵役？"
        },
        answers: [
            {
                text: {
                    ko: "모병제로 전환해야 한다",
                    en: "Should transition to volunteer military",
                    jp: "志願制に転換すべきです",
                    cn: "应该转为志愿兵制"
                },
                score: 2
            },
            {
                text: {
                    ko: "현 상황에서는 징병제가 필요하다",
                    en: "Conscription is necessary in current situation",
                    jp: "現状では徴兵制が必要です",
                    cn: "目前情况下需要征兵制"
                },
                score: 1
            },
            {
                text: {
                    ko: "의무이자 명예다",
                    en: "It's both duty and honor",
                    jp: "義務であり名誉です",
                    cn: "这是义务也是荣誉"
                },
                score: 0
            }
        ]
    },
    {
        id: 15,
        question: {
            ko: "종교의 사회적 역할에 대해 어떻게 생각하나요?",
            en: "What do you think about the social role of religion?",
            jp: "宗教の社会的役割についてどう思いますか？",
            cn: "您如何看待宗教的社会作用？"
        },
        answers: [
            {
                text: {
                    ko: "정치와 종교는 분리되어야 한다",
                    en: "Politics and religion should be separated",
                    jp: "政治と宗教は分離されるべきです",
                    cn: "政治和宗教应该分离"
                },
                score: 2
            },
            {
                text: {
                    ko: "도덕적 가이드 역할은 할 수 있다",
                    en: "Can serve as moral guidance",
                    jp: "道徳的ガイドの役割はできます",
                    cn: "可以起到道德指导作用"
                },
                score: 1
            },
            {
                text: {
                    ko: "사회 질서 유지에 중요하다",
                    en: "Important for maintaining social order",
                    jp: "社会秩序維持に重要です",
                    cn: "对维护社会秩序很重要"
                },
                score: 0
            }
        ]
    },
    {
        id: 16,
        question: {
            ko: "인공지능과 자동화로 인한 일자리 감소 문제를 어떻게 해결해야 할까요?",
            en: "How should we address job losses due to AI and automation?",
            jp: "AIと自動化による雇用減少問題をどう解決すべきでしょうか？",
            cn: "应该如何解决人工智能和自动化导致的就业减少问题？"
        },
        answers: [
            {
                text: {
                    ko: "기본소득을 도입해야 한다",
                    en: "Should introduce universal basic income",
                    jp: "ベーシックインカムを導入すべきです",
                    cn: "应该引入基本收入"
                },
                score: 2
            },
            {
                text: {
                    ko: "직업 재교육 프로그램을 확대해야 한다",
                    en: "Should expand job retraining programs",
                    jp: "職業再教育プログラムを拡大すべきです",
                    cn: "应该扩大职业再培训计划"
                },
                score: 1
            },
            {
                text: {
                    ko: "시장이 자연스럽게 해결할 것이다",
                    en: "The market will naturally resolve it",
                    jp: "市場が自然に解決するでしょう",
                    cn: "市场会自然解决"
                },
                score: 0
            }
        ]
    },
    {
        id: 17,
        question: {
            ko: "기업의 사회적 책임에 대해 어떻게 생각하나요?",
            en: "What do you think about corporate social responsibility?",
            jp: "企業の社会的責任についてどう思いますか？",
            cn: "您如何看待企业社会责任？"
        },
        answers: [
            {
                text: {
                    ko: "법적으로 강제해야 한다",
                    en: "Should be legally mandated",
                    jp: "法的に強制すべきです",
                    cn: "应该通过法律强制执行"
                },
                score: 2
            },
            {
                text: {
                    ko: "사회적 압력으로 유도해야 한다",
                    en: "Should be induced through social pressure",
                    jp: "社会的圧力で誘導すべきです",
                    cn: "应该通过社会压力引导"
                },
                score: 1
            },
            {
                text: {
                    ko: "기업의 자율에 맡겨야 한다",
                    en: "Should be left to corporate autonomy",
                    jp: "企業の自律に任せるべきです",
                    cn: "应该交给企业自主决定"
                },
                score: 0
            }
        ]
    },
    {
        id: 18,
        question: {
            ko: "개인정보 보호와 국가 안보 중 무엇이 더 중요하나요?",
            en: "What's more important: privacy protection or national security?",
            jp: "個人情報保護と国家安保、どちらがより重要ですか？",
            cn: "个人信息保护和国家安全哪个更重要？"
        },
        answers: [
            {
                text: {
                    ko: "개인정보 보호가 우선이다",
                    en: "Privacy protection comes first",
                    jp: "個人情報保護が優先です",
                    cn: "个人信息保护优先"
                },
                score: 2
            },
            {
                text: {
                    ko: "상황에 따라 균형을 맞춰야 한다",
                    en: "Should balance depending on situation",
                    jp: "状況に応じてバランスを取るべきです",
                    cn: "应该根据情况平衡"
                },
                score: 1
            },
            {
                text: {
                    ko: "국가 안보가 우선이다",
                    en: "National security comes first",
                    jp: "国家安保が優先です",
                    cn: "国家安全优先"
                },
                score: 0
            }
        ]
    },
    {
        id: 19,
        question: {
            ko: "전통문화 보존에 대해 어떻게 생각하나요?",
            en: "What do you think about preserving traditional culture?",
            jp: "伝統文化の保存についてどう思いますか？",
            cn: "您如何看待传统文化保护？"
        },
        answers: [
            {
                text: {
                    ko: "시대에 맞게 변화해야 한다",
                    en: "Should change with the times",
                    jp: "時代に合わせて変化すべきです",
                    cn: "应该与时俱进"
                },
                score: 2
            },
            {
                text: {
                    ko: "좋은 것은 보존하고 나쁜 것은 버려야 한다",
                    en: "Should preserve good parts and discard bad ones",
                    jp: "良いものは保存し、悪いものは捨てるべきです",
                    cn: "应该保留好的，抛弃坏的"
                },
                score: 1
            },
            {
                text: {
                    ko: "원형 그대로 보존해야 한다",
                    en: "Should preserve in original form",
                    jp: "原形のまま保存すべきです",
                    cn: "应该原样保存"
                },
                score: 0
            }
        ]
    },
    {
        id: 20,
        question: {
            ko: "청소년의 정치 참여에 대해 어떻게 생각하나요?",
            en: "What do you think about youth political participation?",
            jp: "青少年の政治参加についてどう思いますか？",
            cn: "您如何看待青少年政治参与？"
        },
        answers: [
            {
                text: {
                    ko: "적극 권장해야 한다",
                    en: "Should be actively encouraged",
                    jp: "積極的に奨励すべきです",
                    cn: "应该积极鼓励"
                },
                score: 2
            },
            {
                text: {
                    ko: "교육을 통해 점진적으로 참여시켜야 한다",
                    en: "Should participate gradually through education",
                    jp: "教育を通じて段階的に参加させるべきです",
                    cn: "应该通过教育逐步参与"
                },
                score: 1
            },
            {
                text: {
                    ko: "성인이 된 후에 참여해야 한다",
                    en: "Should participate after becoming adults",
                    jp: "成人になってから参加すべきです",
                    cn: "应该成年后再参与"
                },
                score: 0
            }
        ]
    },
    {
        id: 21,
        question: {
            ko: "온라인상의 혐오표현을 어떻게 다뤄야 할까요?",
            en: "How should online hate speech be handled?",
            jp: "オンライン上のヘイトスピーチをどう扱うべきでしょうか？",
            cn: "应该如何处理网上仇恨言论？"
        },
        answers: [
            {
                text: {
                    ko: "법적으로 강력히 처벌해야 한다",
                    en: "Should be legally punished severely",
                    jp: "法的に厳しく処罰すべきです",
                    cn: "应该依法严厉处罚"
                },
                score: 2
            },
            {
                text: {
                    ko: "플랫폼 차원에서 관리해야 한다",
                    en: "Should be managed at platform level",
                    jp: "プラットフォームレベルで管理すべきです",
                    cn: "应该在平台层面管理"
                },
                score: 1
            },
            {
                text: {
                    ko: "표현의 자유를 우선 보장해야 한다",
                    en: "Freedom of expression should be prioritized",
                    jp: "表現の自由を優先保障すべきです",
                    cn: "应该优先保障表达自由"
                },
                score: 0
            }
        ]
    },
    {
        id: 22,
        question: {
            ko: "국가의 역사교육에 대해 어떻게 생각하나요?",
            en: "What do you think about national history education?",
            jp: "国家の歴史教育についてどう思いますか？",
            cn: "您如何看待国家历史教育？"
        },
        answers: [
            {
                text: {
                    ko: "다양한 관점을 균형있게 가르쳐야 한다",
                    en: "Should teach various perspectives in balance",
                    jp: "様々な観点をバランス良く教えるべきです",
                    cn: "应该平衡地教授各种观点"
                },
                score: 2
            },
            {
                text: {
                    ko: "객관적 사실을 중심으로 가르쳐야 한다",
                    en: "Should focus on objective facts",
                    jp: "客観的事実を中心に教えるべきです",
                    cn: "应该以客观事实为中心"
                },
                score: 1
            },
            {
                text: {
                    ko: "국가에 대한 자긍심을 키워야 한다",
                    en: "Should foster pride in the nation",
                    jp: "国家に対する誇りを育てるべきです",
                    cn: "应该培养对国家的自豪感"
                },
                score: 0
            }
        ]
    },
    {
        id: 23,
        question: {
            ko: "부동산 가격 안정화 방안으로 무엇이 좋을까요?",
            en: "What's the best way to stabilize real estate prices?",
            jp: "不動産価格安定化方案として何が良いでしょうか？",
            cn: "稳定房地产价格的最好方法是什么？"
        },
        answers: [
            {
                text: {
                    ko: "공공주택을 대폭 확대해야 한다",
                    en: "Should greatly expand public housing",
                    jp: "公共住宅を大幅に拡大すべきです",
                    cn: "应该大幅扩大公共住房"
                },
                score: 2
            },
            {
                text: {
                    ko: "규제와 공급 확대를 병행해야 한다",
                    en: "Should combine regulation with supply expansion",
                    jp: "規制と供給拡大を並行すべきです",
                    cn: "应该监管与供应扩张并行"
                },
                score: 1
            },
            {
                text: {
                    ko: "규제보다는 공급 확대에 집중해야 한다",
                    en: "Should focus on supply expansion over regulation",
                    jp: "規制より供給拡大に集中すべきです",
                    cn: "应该专注于供应扩张而非监管"
                },
                score: 0
            }
        ]
    },
    {
        id: 24,
        question: {
            ko: "노동조합의 역할에 대해 어떻게 생각하나요?",
            en: "What do you think about the role of labor unions?",
            jp: "労働組合の役割についてどう思いますか？",
            cn: "您如何看待工会的作用？"
        },
        answers: [
            {
                text: {
                    ko: "더욱 강화되어야 한다",
                    en: "Should be further strengthened",
                    jp: "さらに強化されるべきです",
                    cn: "应该进一步加强"
                },
                score: 2
            },
            {
                text: {
                    ko: "현 수준이 적당하다",
                    en: "Current level is appropriate",
                    jp: "現在のレベルが適当です",
                    cn: "目前水平是合适的"
                },
                score: 1
            },
            {
                text: {
                    ko: "과도한 권한을 가지고 있다",
                    en: "Has excessive authority",
                    jp: "過度な権限を持っています",
                    cn: "拥有过度权力"
                },
                score: 0
            }
        ]
    },
    {
        id: 25,
        question: {
            ko: "국제 관계에서 우리나라의 역할은 무엇이어야 할까요?",
            en: "What should our country's role be in international relations?",
            jp: "国際関係で我が国の役割は何であるべきでしょうか？",
            cn: "我国在国际关系中的作用应该是什么？"
        },
        answers: [
            {
                text: {
                    ko: "평화와 인권 증진에 앞장서야 한다",
                    en: "Should lead in promoting peace and human rights",
                    jp: "平和と人権増進に先頭に立つべきです",
                    cn: "应该在促进和平与人权方面发挥带头作用"
                },
                score: 2
            },
            {
                text: {
                    ko: "실용적 외교를 해야 한다",
                    en: "Should pursue pragmatic diplomacy",
                    jp: "実用的外交をすべきです",
                    cn: "应该进行务实外交"
                },
                score: 1
            },
            {
                text: {
                    ko: "국익을 최우선으로 해야 한다",
                    en: "Should prioritize national interests",
                    jp: "国益を最優先にすべきです",
                    cn: "应该以国家利益为最优先"
                },
                score: 0
            }
        ]
    },
    {
        id: 26,
        question: {
            ko: "출산률 저하 문제를 어떻게 해결해야 할까요?",
            en: "How should we address the declining birth rate?",
            jp: "出生率低下問題をどう解決すべきでしょうか？",
            cn: "应该如何解决出生率下降问题？"
        },
        answers: [
            {
                text: {
                    ko: "국가가 육아를 전면 지원해야 한다",
                    en: "State should fully support childcare",
                    jp: "国家が育児を全面支援すべきです",
                    cn: "国家应该全面支持育儿"
                },
                score: 2
            },
            {
                text: {
                    ko: "일과 가정의 양립을 도와야 한다",
                    en: "Should help balance work and family",
                    jp: "仕事と家庭の両立を助けるべきです",
                    cn: "应该帮助平衡工作与家庭"
                },
                score: 1
            },
            {
                text: {
                    ko: "개인의 선택을 존중해야 한다",
                    en: "Should respect individual choice",
                    jp: "個人の選択を尊重すべきです",
                    cn: "应该尊重个人选择"
                },
                score: 0
            }
        ]
    },
    {
        id: 27,
        question: {
            ko: "성별 임금격차 해소를 위해 무엇이 필요할까요?",
            en: "What's needed to address the gender pay gap?",
            jp: "性別賃金格差解消のために何が必要でしょうか？",
            cn: "解决性别工资差距需要什么？"
        },
        answers: [
            {
                text: {
                    ko: "법적 강제 조치가 필요하다",
                    en: "Legal enforcement measures are needed",
                    jp: "法的強制措置が必要です",
                    cn: "需要法律强制措施"
                },
                score: 2
            },
            {
                text: {
                    ko: "사회적 인식 개선이 우선이다",
                    en: "Improving social awareness comes first",
                    jp: "社会的認識改善が優先です",
                    cn: "改善社会认识是优先的"
                },
                score: 1
            },
            {
                text: {
                    ko: "시장 경쟁이 자연스럽게 해결할 것이다",
                    en: "Market competition will naturally resolve it",
                    jp: "市場競争が自然に解決するでしょう",
                    cn: "市场竞争会自然解决"
                },
                score: 0
            }
        ]
    },
    {
        id: 28,
        question: {
            ko: "에너지 정책의 우선순위는 무엇이어야 할까요?",
            en: "What should be the priority in energy policy?",
            jp: "エネルギー政策の優先順位は何であるべきでしょうか？",
            cn: "能源政策的优先级应该是什么？"
        },
        answers: [
            {
                text: {
                    ko: "재생에너지로의 완전 전환",
                    en: "Complete transition to renewable energy",
                    jp: "再生可能エネルギーへの完全転換",
                    cn: "完全转向可再生能源"
                },
                score: 2
            },
            {
                text: {
                    ko: "점진적인 에너지 전환",
                    en: "Gradual energy transition",
                    jp: "段階的なエネルギー転換",
                    cn: "渐进式能源转型"
                },
                score: 1
            },
            {
                text: {
                    ko: "경제성과 안정성 우선",
                    en: "Prioritize economic efficiency and stability",
                    jp: "経済性と安定性を優先",
                    cn: "优先考虑经济性和稳定性"
                },
                score: 0
            }
        ]
    },
    {
        id: 29,
        question: {
            ko: "대중교통 무료화에 대해 어떻게 생각하나요?",
            en: "What do you think about free public transportation?",
            jp: "公共交通機関の無料化についてどう思いますか？",
            cn: "您如何看待公共交通免费？"
        },
        answers: [
            {
                text: {
                    ko: "적극 추진해야 한다",
                    en: "Should be actively promoted",
                    jp: "積極的に推進すべきです",
                    cn: "应该积极推进"
                },
                score: 2
            },
            {
                text: {
                    ko: "일부 계층에게만 우선 적용해야 한다",
                    en: "Should be applied to certain groups first",
                    jp: "一部階層にまず優先適用すべきです",
                    cn: "应该优先适用于某些群体"
                },
                score: 1
            },
            {
                text: {
                    ko: "이용자가 비용을 부담해야 한다",
                    en: "Users should bear the cost",
                    jp: "利用者が費用を負担すべきです",
                    cn: "使用者应该承担费用"
                },
                score: 0
            }
        ]
    },
    {
        id: 30,
        question: {
            ko: "미래 사회에서 가장 중요한 가치는 무엇이라고 생각하나요?",
            en: "What do you think is the most important value in future society?",
            jp: "未来社会で最も重要な価値は何だと思いますか？",
            cn: "您认为未来社会最重要的价值是什么？"
        },
        answers: [
            {
                text: {
                    ko: "평등과 포용",
                    en: "Equality and inclusion",
                    jp: "平等と包容",
                    cn: "平等与包容"
                },
                score: 2
            },
            {
                text: {
                    ko: "조화와 균형",
                    en: "Harmony and balance",
                    jp: "調和とバランス",
                    cn: "和谐与平衡"
                },
                score: 1
            },
            {
                text: {
                    ko: "질서와 안정",
                    en: "Order and stability",
                    jp: "秩序と安定",
                    cn: "秩序与稳定"
                },
                score: 0
            }
        ]
    }
];
