import React from "react";

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

export const skill = [
    {
        id: 1, type: "front", path: (
            <svg viewBox="0 0 128 128">
                <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path>
                <path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path>
                <path fill="#EBEBEB"
                      d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path>
                <path
                    d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path>
                <path fill="#fff"
                      d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
            </svg>
        )
    },
    {
        id: 2, type: "front", path: (
            <svg viewBox="0 0 128 128">
                <path fill="#131313"
                      d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path>
                <path fill="#1572B6"
                      d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path>
                <path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path>
                <path fill="#fff"
                      d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path>
                <path fill="#EBEBEB"
                      d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path>
                <path fill="#fff"
                      d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path>
                <path fill="#EBEBEB"
                      d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
            </svg>
        )
    },
    {
        id: 3, type: "front", path: (
            <svg viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                <path fill="#323330"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
            </svg>
        )
    },
    {
        id: 4, type: "front", path: (
            <svg viewBox="0 0 128 128">
                <g fill="#61DAFB">
                    <circle cx="64" cy="47.5" r="9.3"></circle>
                    <path
                        d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
                </g>
            </svg>
        )
    },
    {
        id: 5, type: "front", path: (
            <svg viewBox="0 0 128 128">
                <defs>
                    <linearGradient id="a" x1="6" x2="235" y1="33" y2="344"
                                    gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#41d1ff"></stop>
                        <stop offset="1" stopColor="#bd34fe"></stop>
                    </linearGradient>
                    <linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989"
                                    gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#ffea83"></stop>
                        <stop offset=".083" stopColor="#ffdd35"></stop>
                        <stop offset="1" stopColor="#ffa800"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#a)"
                      d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"></path>
                <path fill="url(#b)"
                      d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"></path>
            </svg>
        )
    },
    {
        id: 6, type: "back", path: (
            <svg viewBox="0 0 128 128">
                <path fill="#0074BD"
                      d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"></path>
                <path fill="#EA2D2E"
                      d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"></path>
                <path fill="#0074BD"
                      d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"></path>
                <path fill="#EA2D2E"
                      d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"></path>
                <path fill="#0074BD"
                      d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"></path>
                <path fill="#EA2D2E"
                      d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"></path>
            </svg>
        )
    },
    {
        id: 7, type: "back", path: (
            <svg viewBox="0 0 128 128">
                <path fill="#5fb832"
                      d="M1.008 98.82C.402 98.52 0 97.813 0 97.008c0-1.211.906-2.117 2.117-2.117.403 0 .805.101 1.11.304 2.214 1.512 4.636 2.215 6.75 2.215 2.32 0 3.628-1.008 3.628-2.52v-.1c0-1.813-2.52-2.419-5.238-3.224-3.43-1.007-7.258-2.421-7.258-6.855v-.102c0-4.433 3.63-7.054 8.266-7.054 2.52 0 5.04.707 7.355 1.918.707.402 1.31 1.105 1.31 2.015 0 1.207-1.009 2.114-2.216 2.114-.402 0-.707-.098-1.11-.301-1.913-1.008-3.827-1.614-5.44-1.614-2.118 0-3.227 1.008-3.227 2.32v.098c0 1.715 2.52 2.422 5.242 3.329 3.426 1.007 7.254 2.62 7.254 6.754v.097c0 4.942-3.828 7.36-8.664 7.36-2.926 0-6.149-.907-8.871-2.825m38.398-9.168c0-4.539-3.023-7.46-6.648-7.46-3.63 0-6.754 3.023-6.754 7.46v.098c0 4.438 3.125 7.46 6.754 7.46 3.625-.202 6.648-3.022 6.648-7.558m-18.543-9.375c0-1.511 1.11-2.722 2.621-2.722a2.71 2.71 0 0 1 2.72 2.722v1.614c1.714-2.418 4.132-4.336 7.862-4.336 5.442 0 10.786 4.336 10.786 11.996v.101c0 7.657-5.243 11.993-10.786 11.993-3.832 0-6.25-1.915-7.863-4.032v8.164c0 1.512-1.207 2.621-2.719 2.621a2.604 2.604 0 0 1-2.62-2.62v-25.5m26.202-.102c0-1.512 1.11-2.719 2.621-2.719a2.71 2.71 0 0 1 2.723 2.719v1.312c.3-2.015 3.528-3.933 5.844-3.933 1.715 0 2.621 1.11 2.621 2.62 0 1.41-.906 2.321-2.117 2.52-3.828.707-6.45 3.93-6.45 8.567v7.66c0 1.41-1.21 2.621-2.722 2.621a2.6 2.6 0 0 1-2.617-2.621V80.176m16.324 0a2.71 2.71 0 0 1 2.723-2.719 2.71 2.71 0 0 1 2.722 2.719v18.746c0 1.512-1.21 2.621-2.722 2.621s-2.723-1.11-2.723-2.621V80.176m7.762.101a2.712 2.712 0 0 1 2.722-2.722c1.512 0 2.82 1.21 2.82 2.722v1.11c1.512-2.117 3.833-3.832 7.56-3.832 5.445 0 8.566 3.527 8.566 8.87v12.497c0 1.512-1.207 2.621-2.72 2.621-1.51 0-2.823-1.11-2.823-2.621V88.039c0-3.629-1.914-5.644-5.14-5.644-3.224 0-5.442 2.117-5.442 5.742v10.785c0 1.512-1.207 2.621-2.82 2.621-1.512 0-2.723-1.11-2.723-2.621V80.277m35.578 16.832c-3.73 0-6.852-2.824-6.852-7.457v-.101c0-4.535 3.121-7.461 6.852-7.461 3.73 0 6.953 3.023 6.953 7.46v.102c0 4.434-3.223 7.457-6.953 7.457m9.574-19.453a2.71 2.71 0 0 0-2.719 2.723v1.613c-1.816-2.422-4.234-4.336-8.164-4.336-5.644 0-11.09 4.336-11.09 12.094v.102c0 7.66 5.446 12.093 11.09 12.093 3.93 0 6.45-1.914 8.164-4.03-.304 4.233-2.925 6.35-7.562 6.35-2.719 0-5.137-.706-7.356-1.816-.3-.101-.605-.199-1.007-.199-1.31 0-2.32 1.008-2.32 2.215 0 1.008.605 1.715 1.515 2.117 2.922 1.41 5.844 2.117 9.27 2.117 4.335 0 7.66-1.008 9.878-3.125 2.016-1.914 3.125-4.836 3.125-8.77V80.278c-.101-1.511-1.312-2.62-2.824-2.62m-47.469-6.552c0 1.41-1.21 2.622-2.722 2.622s-2.723-1.211-2.723-2.622c0-1.41 1.21-2.62 2.723-2.62 1.511 0 2.722 1.21 2.722 2.62m14.11-17.437c-5.946 7.863-18.746 5.242-27.012 5.543 0 0-1.41.102-2.922.305 0 0 .606-.203 1.207-.504 5.746-1.914 8.469-2.32 11.996-4.133 6.551-3.324 13.102-10.48 14.41-17.941-2.52 7.156-10.078 13.304-17.03 15.824-4.74 1.715-13.306 3.328-13.306 3.328l-.3-.203c-5.848-2.723-6.047-15.117 4.636-19.051 4.637-1.711 9.07-.805 14.11-1.914 5.34-1.207 11.59-5.14 14.11-10.281 2.823 8.367 6.25 21.168.1 29.027Zm.101-31.445a21.565 21.565 0 0 1-2.62 4.437c-4.434-4.437-10.583-7.156-17.438-7.156-13.403 0-24.29 10.683-24.29 23.683 0 6.852 3.024 13 7.762 17.336l.504.504c-.906-.707-1.008-2.015-.304-2.824.707-.906 2.015-1.008 2.925-.3.907.706 1.008 2.015.301 2.82-.707.91-2.016 1.007-2.922.304l.403.301a24.776 24.776 0 0 0 15.62 5.543c12.801 0 23.282-9.773 24.192-21.969.805-5.949-1.008-13.609-4.133-22.68m42.43 57.048h-.906v1.21h.906c.305 0 .605-.203.605-.605 0-.402-.3-.605-.605-.605Zm.504 3.023-.906-1.41h-.606v1.41h-.504v-3.426h1.41c.606 0 1.11.403 1.11 1.008a.975.975 0 0 1-.907 1.008l.907 1.41Zm-.805-4.332c-1.41 0-2.621 1.105-2.621 2.52 0 1.41 1.211 2.519 2.621 2.519s2.621-1.11 2.621-2.52c0-1.312-1.21-2.52-2.62-2.52Zm0 5.64c-1.715 0-3.125-1.308-3.125-3.023 0-1.71 1.41-3.023 3.125-3.023 1.711 0 3.125 1.312 3.125 3.023 0 1.613-1.414 3.024-3.125 3.024"></path>
            </svg>
        )
    },
]

export const dummyProjects = [
    {id: 1, title: "Project 1", description: "React 포트폴리오", type:"Web", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 2, title: "Project 2", description: "Next.js 블로그", type:"MCU", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 3, title: "Project 3", description: "Vue.js 대시보드", type:"Web", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 4, title: "Project 4", description: "Svelte 랜딩페이지", type:"Web", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 5, title: "Project 5", description: "Node.js API 서버", type:"Web", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 6, title: "Project 6", description: "Python Flask 앱", type:"MCU", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 7, title: "Project 7", description: "Python Flask 앱", type:"MCU", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},
    {id: 8, title: "Project 8", description: "Python Flask 앱", type:"Toy", url: "https://raw.githubusercontent.com/Plastic-Recycling/.github/refs/heads/main/profile/README.md"},

];

export const dummyBlog = [
    {id: 1, title: "React 상태 관리", description: "Recoil,fffffff"},
    {id: 2, title: "Vite가 좋은 이유", description: "빠른 빌드 속도"},
];