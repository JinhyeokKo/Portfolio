import Plastic from "../../assets/plastic.png"
import Portfolio from "../../assets/intro.png"
import Bloom from "../../assets/bloom.jpg"

export const about = [
    {
        id: 1, title: "보건 행정에서 개발자로",
        description: "본래 보건 행정을 전공했지만, 반복적인 업무 속에서 '더 창의적인 무언가를 만들고 싶다'는 갈증을 느꼈습니다.\n" +
            "그러던 중, 친구의 추천으로 웹 개발을 시작했고, 단순한 웹사이트를 만들어 보면서 새로운 세계가 열렸습니다.\n" +
            "이후 본격적으로 배워보고 싶어 부트캠프에 참여했고, 지금은 계속해서 배우고 성장하는 과정 자체를 즐기고 있습니다."
    },
    {id: 2, title: "협업에 대한 가치관", description: "개발은 혼자 잘한다고 끝나는 게 아니라, 함께 만들어가는 작업이라는 걸 느꼈습니다.\n" +
            "특히 부트캠프 프로젝트를 하면서 기획자, 프론트엔드 개발자 등 다양한 사람들과 협업하는 과정에서 소통의 중요성을 실감했고, 문제를 함께 해결해 나갈 때 큰 보람을 느꼈습니다.\n" +
            "그래서 백엔드 개발자로서도 팀워크와 커뮤니케이션 능력을 항상 중요하게 생각하며, 신뢰받는 동료가 되고 싶습니다."
    },
    {id: 3, title: "백엔드 개발자를 지망하는 이유", description: "다양한 분야 중 백엔드 개발에 매력을 느낀 이유는, 눈에 보이지 않는 로직과 구조를 설계하며 시스템을 안정적으로 뒷받침하는 역할에 큰 책임감과 재미를 느꼈기 때문입니다.\n" +
            "데이터를 다루고, API를 설계하고, 성능을 고려하는 과정에서 하나의 시스템을 '진짜로' 만들어 나간다는 실감이 들었습니다."
    },
    {id: 4, title: "앞으로의 방향", description: "백엔드 개발자로서 신뢰할 수 있는 구조를 설계하고, 협업에 강한 개발자가 되는 것이 제 목표입니다.\n" +
            "단순히 기능을 구현하는 것을 넘어서, 사용자 경험과 팀의 개발 흐름까지 고려하는 개발자로 성장하고 싶습니다.\n" +
            "그래서 앞으로도 코드뿐만 아니라, 사람과 프로세스를 이해하는 법도 계속해서 배워나가려 합니다."
    },
];

export const dummyProjects = [
    {id: 1, title: "Plastic-Recycle", description: "플라스틱 재활용 관리 서비스", term: "2024.07 ~ 2024.08", type:"Web", tag:"Back", logo: Plastic, intro: "/plasticIntro.md", url: "/plastic.md"},
    {id: 2, title: "피어나다", description: "농림축산식품부 아이디어 기획 공모전", type:"ETC", tag:"Design", logo: Bloom, intro: "/bloomIntro.md", url: "/bloom.pdf"},
    {id: 3, title: "Portfolio", description: "개인 포트폴리오 사이트", term:"2025.03 ~ 2025.04", type:"Web", tag:"Front", logo: Portfolio, intro: "/portfolioIntro.md", url: "/portfolio.md"},
];