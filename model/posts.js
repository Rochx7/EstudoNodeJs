module.exports = {
    posts: [
        {
            id: 'abcd',
            title: 'Teste',
            description: 'Descrição teste'
        },

    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateId(), title, description })
    },

    deletePost(id) {

    }




}

function generateId() {
    return Math.random().toString(36).substr(2, 9)
}