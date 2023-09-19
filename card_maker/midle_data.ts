const textBlockHello2: TextBlock = {
    id: 'blk1',
    width: 50,
    hight: 14,
    posX: 0,
    posY: 0,
    color: 'FFFFFF',
    filtr: '',
    type: 'text',
    chars: []
}

const imageBlockExample2: ImageBlock = {
    id: 'blk2',
    width: 200,
    hight: 100,
    posX: 20,
    posY: 20,
    color: '',
    filtr: '+101010',
    type: 'image',
    data: 'Base64_string'
}

const artBlockExample2: ArtBlock = {
    id: 'blk3',
    width: 50,
    hight: 50,
    posX: 100,
    posY: 100,
    color: 'FF0000',
    filtr: '',
    type: 'art',
    data: {
        name: 'quote',
        data: 'Base64_string'
    }
}

const templateExample2: Template = {
    id: 'tmp1',
    width: 800,
    hight: 600,
    blocks: [
        textBlockHello,
        imageBlockExample,
        artBlockExample
    ]
}

const activBlockExample2: ActivBlock = {
    id: 'blk2',
    changeParametrs: ['posX', 'posY'],
    newValues: ['200', '150']
}

const sessionExample2: Session = {
    selectedBlock: activBlockExample,
    templates: [
        templateExample
    ]
}