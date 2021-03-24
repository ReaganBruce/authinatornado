export interface IBlogs {
    id: number,
    authorid: number,
    name: string
    title: string,
    content: string,
    email: string,
    created_at: Date,
}

export interface ITags {
    id: number,
    name: string
}