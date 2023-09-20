type Char = {   // весь текст сразу
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: boolean
}

type ArtObject = {
    name: string,
    data: string
}

type Block = {
    id: string,
    width: number,
    hight: number,
    posX: number,
    posY: number,
    color: string,
    filtr: string     // на весь холст
}

type TextBlock = Block & {
    type: 'text',
    chars: Array<Char>
}

type ImageBlock = Block & {
    type: 'image',// добавить ссылку
    data: string
}

type ArtBlock = Block & {
    type: 'art',
    data: ArtObject
}

type Template = {    // добавить холст, фон
    id: string,
    width: number,
    hight: number,
    blocks: Array<TextBlock|ImageBlock|ArtBlock>
}

type ActivBlock = {
    id: string
    changeParametrs: Array<string>, // лишнее
    newValues: Array<string>      // лишнее
}

type Session = {
    selectedBlock: ActivBlock,
    templates: Array<Template>
}

// + тестовые данные