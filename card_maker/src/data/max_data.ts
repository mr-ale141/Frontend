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
        svg_data: `<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:ns1="http://sozi.baierouge.fr" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 468 468"><g transform="translate(0 468) scale(.066857 -.066857)" fill="#000000"><path d="m650 6501c-201-40-411-270-512-561l-33-95v-1805c0-1721 1-1808 18-1870 99-349 496-586 1035-617 61-3 112-10 112-14 0-28-54-147-93-205-49-73-210-238-342-350-124-104-205-185-226-226-24-47-25-131-1-178 41-81 117-99 352-82 459 34 884 197 1280 490 145 108 383 344 485 482l78 105 1766 5 1766 5 46 21c201 93 457 356 504 517 13 47 15 275 13 1958l-3 1906-39 77c-65 127-198 274-334 366-130 88 174 80-3006 79-1557-1-2847-4-2866-8zm5675-395c28-17 73-53 101-80 27-28 63-73 80-101l29-50 3-1800c3-2042 12-1830-88-1963-58-77-132-142-183-161-20-8-598-11-1863-11h-1835l-25-28c-24-25-104-151-240-376-70-116-133-178-282-277-132-87-290-165-446-218-65-23-120-41-122-41-3 0 5 19 17 42 40 79 107 254 128 338 17 65 23 128 28 265l6 180-47 57-47 58h-372c-340 0-375 2-413 19-103 47-216 196-269 356l-25 74v1684c0 1630 1 1687 19 1746 37 119 171 282 252 308 24 8 828 11 2789 10l2755-2 50-29z"/></g><metadata><rdf:RDF><cc:Work><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/"/><dc:publisher><cc:Agent rdf:about="http://openclipart.org/"><dc:title>Openclipart</dc:title></cc:Agent></dc:publisher><dc:title>Speech 1</dc:title><dc:date>2012-02-06T15:31:36</dc:date><dc:description>A Speech Bubble</dc:description><dc:source>https://openclipart.org/detail/167796/speech-1-by-dripsandcastle</dc:source><dc:creator><cc:Agent><dc:title>dripsandcastle</dc:title></cc:Agent></dc:creator><dc:subject><rdf:Bag><rdf:li>bubble</rdf:li><rdf:li>cartoon</rdf:li><rdf:li>speech</rdf:li><rdf:li>talk</rdf:li><rdf:li>words</rdf:li></rdf:Bag></dc:subject></cc:Work><cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/"><cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/><cc:permitsrdf:resource="http://creativecommons.org/ns#Distribution"/><cc:permitsrdf:resource="http://creativecommons.org/ns#DerivativeWorks"/></cc:License></rdf:RDF></metadata></svg>`,
    },
    {
        name: "circle",
        svg_data: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280.000000 1280.000000' preserveAspectRatio='xMidYMid meet'><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'><path d='M6269 12693 c-1179 -21 -2350 -385 -3334 -1038 -1292 -856 -2218 -2138 -2615 -3623 -146 -545 -210 -1043 -210 -1632 0 -398 21 -668 81 -1033 329 -2001 1616 -3728 3444 -4622 669 -327 1352 -524 2095 -604 414 -45 953 -43 1385 5 1604 179 3092 985 4132 2239 782 944 1273 2094 1407 3300 50 451 50 980 1 1425 -253 2247 -1703 4192 -3790 5083 -815 348 -1689 516 -2596 500z m414 -200 c-23 -2 -64 -2 -90 0 -26 2 -7 3 42 3 50 0 71 -1 48 -3z m175 -10 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4 33 0 48 -2 33 -4z m85 -10 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-3097 -529 c1 -5 -73 -46 -166 -91 -119 -58 -167 -77 -166 -66 3 16 302 174 320 169 6 -1 11 -6 12 -12z m3054 -139 c1131 -107 2174 -549 3035 -1286 154 -132 452 -430 584 -584 663 -775 1091 -1705 1245 -2705 46 -300 60 -490 60 -830 0 -340 -14 -528 -60 -830 -151 -991 -586 -1937 -1245 -2705 -132 -154 -430 -452 -584 -584 -768 -659 -1714 -1094 -2705 -1245 -302 -46 -490 -60 -830 -60 -340 0 -530 14 -830 60 -1000 154 -1930 582 -2705 1245 -154 132 -452 430 -584 584 -739 863 -1174 1892 -1287 3045 -24 241 -24 739 0 980 112 1141 526 2132 1260 3015 129 155 486 512 641 641 943 784 2044 1216 3255 1278 148 7 588 -4 750 -19z m-3408 -39 c7 4 8 2 4 -4 -11 -18 -26 -14 -25 6 0 10 3 12 6 4 2 -6 10 -9 15 -6z m6108 -172 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m80 -50 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m220 -150 c0 -3 -13 4 -30 16 -16 12 -30 24 -30 26 0 3 14 -4 30 -16 17 -12 30 -24 30 -26z m-8490 -1498 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-160 -236 c-6 -11 -13 -20 -16 -20 -2 0 0 9 6 20 6 11 13 20 16 20 2 0 0 -9 -6 -20z m10514 -346 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z m97 -185 c27 -56 49 -103 47 -105 -2 -2 -27 44 -56 101 -28 58 -50 105 -47 105 3 0 28 -45 56 -101z m-11534 -2206 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m-10 -125 c-2 -18 -4 -6 -4 27 0 33 2 48 4 33 2 -15 2 -42 0 -60z m-10 -211 c-2 -23 -3 -1 -3 48 0 50 1 68 3 42 2 -26 2 -67 0 -90z m12190 -479 c-2 -29 -3 -8 -3 47 0 55 1 79 3 53 2 -26 2 -71 0 -100z m10 -125 c-2 -16 -4 -5 -4 22 0 28 2 40 4 28 2 -13 2 -35 0 -50z m-14 -48 c4 -68 3 -87 -3 -60 -9 39 -14 172 -6 164 2 -2 6 -49 9 -104z m0 -107 c8 -5 6 -8 -5 -8 -14 0 -18 8 -17 38 2 34 2 34 6 7 3 -16 10 -33 16 -37z m-11544 -2155 c28 -57 49 -103 46 -103 -5 0 -105 196 -105 206 0 13 7 0 59 -103z m99 -198 c-3 -3 -9 2 -12 12 -6 14 -5 15 5 6 7 -7 10 -15 7 -18z m10392 -519 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m-8519 -1563 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m239 -159 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m80 -50 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 90 20 -6 11 -6 20 -13 20 -16z m5970 -199 c0 -6 -177 -95 -187 -94 -6 0 174 96 185 98 1 1 2 -1 2 -4z m-3327 -662 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m125 -10 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4 33 0 48 -2 33 -4z m205 -10 c-23 -2 -64 -2 -90 0 -26 2 -7 3 42 3 50 0 71 -1 48 -3z'/><path d='M3590 11830 c-41 -21 -72 -39 -67 -40 10 0 147 69 147 75 0 7 3 8 -80 -35z'/></g></svg>`,
    },
    {
        name: "square",
        svg_data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 1278.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform="translate(0.000000,1278.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1438 12630 c-331 -30 -643 -176 -879 -411 -205 -205 -345 -477 -396 -769 -17 -101 -18 -309 -18 -5060 0 -4751 1 -4959 18 -5060 105 -602 556 -1053 1167 -1167 90 -17 351 -18 5070 -18 4719 0 4980 1 5070 18 302 56 564 191 771 398 205 205 345 477 396 769 17 101 18 309 18 5060 0 4751 -1 4959 -18 5060 -79 455 -361 834 -774 1039 -107 53 -249 100 -383 128 -80 16 -386 17 -5020 19 -2714 1 -4974 -2 -5022 -6z m9930 -648 c89 -27 198 -80 261 -126 111 -81 214 -215 270 -350 66 -158 61 244 61 -5086 0 -5306 4 -4923 -59 -5079 -97 -237 -279 -403 -531 -483 l-75 -23 -4925 0 c-4728 0 -4928 1 -4990 18 -272 76 -487 285 -572 557 l-23 75 0 4930 c0 4733 1 4933 18 4995 85 302 342 539 640 589 29 5 2184 8 4952 7 l4900 -1 73 -23z"/></g></svg>`,
    },
    {
        name: "rectangle",
        svg_data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 960.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform="translate(0.000000,960.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M0 4800 l0 -4800 6400 0 6400 0 0 4800 0 4800 -6400 0 -6400 0 0 -4800z m8398 3461 l3182 -1 0 -3460 0 -3460 -5180 0 -5180 0 0 3460 0 3460 1503 2 c826 2 1725 2 1997 1 272 -1 1927 -2 3678 -2z"/></g></svg>`,
    },
    {
        name: "line",
        svg_data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M170 4090 l0 -70 6230 0 6230 0 0 70 0 70 -6230 0 -6230 0 0 -70z"/></g></svg>`,
    },
    {
        name: "arrow",
        svg_data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 640.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M9280 5934 c-106 -21 -223 -80 -293 -150 -99 -97 -148 -196 -168 -336 -10 -72 -9 -97 5 -164 22 -108 75 -212 144 -282 33 -33 391 -297 851 -627 l794 -570 -5084 -5 c-4763 -5 -5087 -6 -5132 -22 -146 -52 -265 -152 -330 -275 -114 -217 -77 -472 93 -644 70 -71 126 -108 217 -142 l58 -22 5078 -5 5078 -5 -752 -615 c-414 -338 -776 -638 -804 -667 -29 -29 -68 -84 -89 -125 -112 -224 -73 -470 105 -649 104 -105 233 -159 382 -159 99 0 186 22 270 68 70 39 2847 2303 2942 2399 160 162 199 422 93 633 -46 94 -119 163 -324 311 -1086 782 -2701 1940 -2747 1970 -83 54 -166 80 -272 84 -49 2 -101 1 -115 -1z"/></g></svg>`,
    },
    {
        name: "like",
        svg_data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1222.000000 1280.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.15, written by Peter Selinger 2001-2017</metadata><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M7271 12780 c-79 -21 -133 -55 -155 -98 -8 -16 -18 -93 -25 -187 -80 -1109 -253 -1873 -531 -2343 -141 -238 -279 -387 -585 -630 -340 -271 -528 -471 -629 -670 -15 -30 -72 -165 -128 -300 -300 -738 -565 -1282 -836 -1719 -265 -425 -548 -739 -783 -867 -116 -63 -180 -76 -365 -76 l-164 0 0 -2625 c0 -1444 2 -2625 5 -2625 3 0 62 -11 132 -24 71 -14 251 -48 400 -75 150 -28 393 -73 540 -101 1744 -324 1588 -298 1917 -325 485 -39 1028 -73 1566 -97 369 -16 1398 -16 1650 0 515 34 826 90 1010 182 324 163 742 555 873 818 l42 85 6 336 c4 246 9 345 19 371 29 76 94 154 305 366 236 236 306 319 360 429 80 163 68 256 -85 635 -101 252 -140 380 -140 464 0 103 64 208 270 441 229 260 292 369 276 481 -10 75 -62 184 -179 376 -202 333 -256 458 -243 557 10 73 56 154 182 321 223 295 252 353 240 486 -19 213 -189 556 -409 829 -83 103 -245 260 -322 311 -169 114 -421 159 -1110 195 -242 13 -1334 18 -2050 9 l-410 -5 -24 70 c-48 138 -29 362 53 622 81 256 179 480 450 1021 107 215 214 434 236 488 85 205 148 438 187 698 22 140 25 637 5 761 -73 454 -193 740 -413 978 -296 321 -816 521 -1138 437z"/><path d="M386 6129 c-123 -29 -263 -139 -324 -255 -66 -127 -62 65 -62 -2674 0 -2181 2 -2493 15 -2549 43 -182 187 -329 370 -377 64 -17 1712 -20 1785 -3 181 42 346 215 380 398 14 74 14 4988 0 5062 -34 183 -199 356 -380 398 -57 13 -1728 13 -1784 0z"/></g></svg>`,
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
            value: "Template TEXT Block",
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
        art_name: "like",
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
