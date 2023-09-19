const textHello: Array<Char> = [
    {
        value: 'H',
        fontSize: 10,
        fontFamily: 'Arial',
        color: '000000',
        bold: true
    }, {
        value: 'e',
        fontSize: 10,
        fontFamily: 'Arial',
        color: '000000',
        bold: true
    }, {
        value: 'l',
        fontSize: 10,
        fontFamily: 'Arial',
        color: '000000',
        bold: true
    }, {
        value: 'l',
        fontSize: 10,
        fontFamily: 'Arial',
        color: '000000',
        bold: true
    }, {
        value: 'o',
        fontSize: 10,
        fontFamily: 'Arial',
        color: '000000',
        bold: true
    }
]

const textBlockHello3: TextBlock = {
    id: 'blk4',
    width: 50,
    hight: 14,
    posX: 0,
    posY: 0,
    color: 'FFFFFF',
    filtr: '',
    type: 'text',
    chars: textHello
}

const artObjectExample: ArtObject = {
    name: 'quote',
    data: 'Base64_string'
}

const imageBlockExample4: ImageBlock = {
    id: 'blk5',
    width: 200,
    hight: 100,
    posX: 20,
    posY: 20,
    color: '',
    filtr: '+101010',
    type: 'image',
    data: 'Base64_string'
}

const artBlockExample5: ArtBlock = {
    id: 'blk6',
    width: 50,
    hight: 50,
    posX: 100,
    posY: 100,
    color: 'FF0000',
    filtr: '',
    type: 'art',
    data: artObjectExample
}

const templateExample6: Template = {
    id: 'tmp2',
    width: 800,
    hight: 600,
    blocks: [
        textBlockHello,
        imageBlockExample,
        artBlockExample
    ]
}

const activBlockExample7: ActivBlock = {
    id: 'blk5',
    changeParametrs: ['posX', 'posY'],
    newValues: ['200', '150']
}

const sessionExample8: Session = {
    selectedBlock: activBlockExample,
    templates: [
        templateExample
    ]
}