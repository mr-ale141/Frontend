type Char = {
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
    filtr: string
}

type TextBlock = Block & {
    type: 'text',
    chars: Array<Char>
}

type ImageBlock = Block & {
    type: 'image',
    data: string
}

type ArtBlock = Block & {
    type: 'art',
    data: ArtObject
}

type Template = {
    id: string,
    width: number,
    hight: number,
    blocks: Array<TextBlock|ImageBlock|ArtBlock>
}

type ActivBlock = {
    id: string
    changeParametrs: Array<string>,
    newValues: Array<string>
}

type Session = {
    selectedBlock: ActivBlock,
    templates: Array<Template>
}