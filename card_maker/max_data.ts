const artObjectSource: Array<ArtObject> = [
    {
        name: 'quote',
        svg_data: 'svg_string'
    }, {
        name: 'circle',
        svg_data: 'svg_string'
    }, {
        name: 'square',
        svg_data: 'svg_string'
    }, {
        name: 'rectangle',
        svg_data: 'svg_string'
    }, {
        name: 'oval',
        svg_data: 'svg_string'
    }, {
        name: 'rhombus',
        svg_data: 'svg_string'
    }, {
        name: 'line',
        svg_data: 'svg_string'
    }, {
        name: 'arrow',
        svg_data: 'svg_string'
    }, {
        name: 'like',
        svg_data: 'svg_string'
    }
]

const textBlockHelloWorld: TextBlock = {
    id: 'blk4',
    width: 50,
    hight: 14,
    posX: 0,
    posY: 0,
    type: 'text',
    value: 'Hello World!',
    fontSize: 14,
    fontFamily: 'Arial',
    color: '000000',
    bold: false,
    cursive: true,
    underline: false,
    background: {
        type: "color",
        data: 'FFFFFF'
    }
}

const imageBlockLink: ImageBlock = {
    id: 'blk5',
    width: 200,
    hight: 100,
    posX: 20,
    posY: 20,
    type: 'image',
    data: {
        type: 'link',
        data: 'https://...'
    }
}

const artBlockCircle: ArtBlock = {
    id: 'blk6',
    width: 50,
    hight: 50,
    posX: 100,
    posY: 100,
    type: 'art',
    color: '00FF00',
    art_name: 'circle',
    background: {
        type: 'color',
        data: 'FFFFFF'
    }
}

const templateMax: Template = {
    id: 'tmp2',
    blocks: [
        textBlockHelloWorld,
        imageBlockLink,
        artBlockCircle
    ]
}

const activBlockMax: ActivBlock = {
    id: 'blk5'
}

const sessionMax: Session = {
    selectedBlock: activBlockMax,
    file_name: 'max_file.stick',
    canvas: {
        width: 800,
        hight: 600,
        filtr: '+000015',
        tamplate_id: 'tmp2',
        background: {
            type: 'color',
            data: '0000FF'
        }
    }
}