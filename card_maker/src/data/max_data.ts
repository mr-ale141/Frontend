import {
    ArtObject,
    TextBlock,
    ImageBlock,
    ArtBlock,
    Template,
    DeltaHistory,
    Session,
} from "../type/type";

const artObjectSource: Array<ArtObject> = [
    {
        name: "quote",
        svg_data: "art/quote/quote.svg",
    },
    {
        name: "circle",
        svg_data:
            "<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='1280.000000pt' height='1280.000000pt' viewBox='0 0 1280.000000 1280.000000' preserveAspectRatio='xMidYMid meet'><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path d='M6269 12693 c-1179 -21 -2350 -385 -3334 -1038 -1292 -856 -2218 -2138 -2615 -3623 -146 -545 -210 -1043 -210 -1632 0 -398 21 -668 81 -1033 329 -2001 1616 -3728 3444 -4622 669 -327 1352 -524 2095 -604 414 -45 953 -43 1385 5 1604 179 3092 985 4132 2239 782 944 1273 2094 1407 3300 50 451 50 980 1 1425 -253 2247 -1703 4192 -3790 5083 -815 348 -1689 516 -2596 500z m414 -200 c-23 -2 -64 -2 -90 0 -26 2 -7 3 42 3 50 0 71 -1 48 -3z m175 -10 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4 33 0 48 -2 33 -4z m85 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-3097 -529 c1 -5 -73 -46 -166 -91 -119 -58 -167 -77 -166 -66 3 16 302 174 320 169 6 -1 11 -6 12 -12z m3054 -139 c1131 -107 2174 -549 3035 -1286 154 -132 452 -430 584 -584 663 -775 1091 -1705 1245 -2705 46 -300 60 -490 60 -830 0 -340 -14 -528 -60 -830 -151 -991 -586 -1937 -1245 -2705 -132 -154 -430 -452 -584 -584 -768 -659 -1714 -1094 -2705 -1245 -302 -46 -490 -60 -830 -60 -340 0 -530 14 -830 60 -1000 154 -1930 582 -2705 1245 -154 132 -452 430 -584 584 -739 863 -1174 1892 -1287 3045 -24 241 -24 739 0 980 112 1141 526 2132 1260 3015 129 155 486 512 641 641 943 784 2044 1216 3255 1278 148 7 588 -4 750 -19z m-3408 -39 c7 4 8 2 4 -4 -11 -18 -26 -14 -25 6 0 10 3 12 6 4 2 -6 10 -9 15 -6z m6108 -172 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m80 -50 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m220 -150 c0 -3 -13 4 -30 16 -16 12 -30 24 -30 26 0 3 14 -4 30 -16 17 -12 30 -24 30 -26z m-8490 -1498 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-160 -236 c-6 -11 -13 -20 -16 -20 -2 0 0 9 6 20 6 11 13 20 16 20 2 0 0 -9 -6 -20z m10514 -346 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z m97 -185 c27 -56 49 -103 47 -105 -2 -2 -27 44 -56 101 -28 58 -50 105 -47 105 3 0 28 -45 56 -101z m-11534 -2206 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m-10 -125 c-2 -18 -4 -6 -4 27 0 33 2 48 4 33 2 -15 2 -42 0 -60z m-10 -211 c-2 -23 -3 -1 -3 48 0 50 1 68 3 42 2 -26 2 -67 0 -90z m12190 -479 c-2 -29 -3 -8 -3 47 0 55 1 79 3 53 2 -26 2 -71 0 -100z m10 -125 c-2 -16 -4 -5 -4 22 0 28 2 40 4 28 2 -13 2 -35 0 -50z m-14 -48 c4 -68 3 -87 -3 -60 -9 39 -14 172 -6 164 2 -2 6 -49 9 -104z m0 -107 c8 -5 6 -8 -5 -8 -14 0 -18 8 -17 38 2 34 2 34 6 7 3 -16 10 -33 16 -37z m-11544 -2155 c28 -57 49 -103 46 -103 -5 0 -105 196 -105 206 0 13 7 0 59 -103z m99 -198 c-3 -3 -9 2 -12 12 -6 14 -5 15 5 6 7 -7 10 -15 7 -18z m10392 -519 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-8519 -1563 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m239 -159 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m80 -50 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 90 20 -6 11 -6 20 -13 20 -16z m5970 -199 c0 -6 -177 -95 -187 -94 -6 0 174 96 185 98 1 1 2 -1 2 -4z m-3327 -662 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m125 -10 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4 33 0 48 -2 33 -4z m205 -10 c-23 -2 -64 -2 -90 0 -26 2 -7 3 42 3 50 0 71 -1 48 -3z'/><path d='M3590 11830 c-41 -21 -72 -39 -67 -40 10 0 147 69 147 75 0 7 3 8 -80 -35z'/></g></svg>",
    },
    {
        name: "square",
        svg_data: "art/square/square.svg",
    },
    {
        name: "rectangle",
        svg_data: "art/rectangle/rectangle.svg",
    },
    {
        name: "line",
        svg_data: "art/line/line.svg",
    },
    {
        name: "arrow",
        svg_data: "art/arrow/arrow.svg",
    },
    {
        name: "like",
        svg_data: "art/like/like.svg",
    },
];

const textBlockSource: Array<TextBlock> = [
    {
        id: "tmp2_txt_blk_1",
        size: {
            width: 200,
            height: 100,
        },
        position: {
            x: 50,
            y: 150,
        },
        type: "text",
        text: {
            value: "Template TEXT",
            fontSize: 14,
            fontFamily: "Arial",
            color: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 1,
            },
            bold: true,
            cursive: true,
            underline: false,
        },
        bgImage: {
            type: "",
            data: "",
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
];

const imageBlockSource: Array<ImageBlock> = [
    {
        id: "tmp3_img_blk_1",
        size: {
            width: 300,
            height: 100,
        },
        position: {
            x: 250,
            y: 400,
        },
        type: "image",
        bgImage: {
            type: "link",
            data: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyYnV0dG9uc19oYW5kX2xhYm9yX3Nldy1pbWFnZS1reWJlMzY3eS5qcGc.jpg",
        },
    },
];

const artBlockSource: Array<ArtBlock> = [
    {
        id: "tmp4_art_blk_1",
        size: {
            width: 100,
            height: 100,
        },
        position: {
            x: 300,
            y: 300,
        },
        type: "art",
        border_color: {
            r: 0xff,
            g: 0x00,
            b: 0x00,
            a: 1,
        },
        art_name: artObjectSource[1].name,
        bgImage: {
            type: "",
            data: "",
        },
        bgColor: {
            r: 0xff,
            g: 0xff,
            b: 0xff,
            a: 0,
        },
    },
];

const templateSource: Array<Template> = [
    {
        id: "tmp1",
        canvas: {
            size: {
                width: 800,
                height: 600,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "",
                data: "",
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 0,
            },
        },
        textBlocks: [],
        imageBlocks: [],
        artBlocks: [],
    },
    {
        id: "tmp2",
        canvas: {
            size: {
                width: 1024,
                height: 720,
            },
            filter: {
                r: 0x10,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "",
                data: "",
            },
            bgColor: {
                r: 0xff,
                g: 0x00,
                b: 0xff,
                a: 0,
            },
        },
        textBlocks: [textBlockSource[0]],
        imageBlocks: [imageBlockSource[0]],
        artBlocks: [artBlockSource[0]],
    },
    {
        id: "tmp3",
        canvas: {
            size: {
                width: 1366,
                height: 768,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "",
                data: "",
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        textBlocks: [],
        imageBlocks: [imageBlockSource[0]],
        artBlocks: [],
    },
    {
        id: "tmp4",
        canvas: {
            size: {
                width: 297,
                height: 210,
            },
            filter: {
                r: 0x0,
                g: 0x0,
                b: 0x0,
                a: 0,
            },
            bgImage: {
                type: "",
                data: "",
            },
            bgColor: {
                r: 0xff,
                g: 0xff,
                b: 0xff,
                a: 1,
            },
        },
        textBlocks: [],
        imageBlocks: [],
        artBlocks: [artBlockSource[0]],
    },
];

const userImageBlocks: Array<ImageBlock> = [
    {
        id: "blk1",
        size: {
            width: 800,
            height: 600,
        },
        position: {
            x: 0,
            y: 0,
        },
        type: "image",
        bgImage: {
            type: "base64",
            data: "img/base64/logo.txt",
        },
    },
];

const userTextBlocks: Array<TextBlock> = [];

const userArtBlocks: Array<ArtBlock> = [];

const selectedTemplate = templateSource[0];

const cmd: DeltaHistory = {
    object: "blk1",
    field: "position",
    operation: "update",
    newValue: { x: 10, y: 50 },
};

const session: Session = {
    editHistory: [
        {
            object: "tmp1",
            field: "",
            operation: "choose",
            newValue: {},
        },
        {
            object: "blk1",
            field: "",
            operation: "create",
            newValue: {},
        },
        {
            object: "blk1",
            field: "bgImage",
            operation: "update",
            newValue: {
                type: "base64",
                data: "img/base64/logo.txt",
            },
        },
    ],
    selectedBlocks: ["blk1"],
    template: selectedTemplate,
    file_name: "max_file.card",
};

export default {
    artObjectSource,
    textBlockSource,
    imageBlockSource,
    artBlockSource,
    templateSource,
    selectedTemplate,
    userImageBlocks,
    userTextBlocks,
    userArtBlocks,
    cmd,
    session,
};
