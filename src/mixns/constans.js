const sharedItems = {
    data() {
        return {
            name: 'Mohammed Aizan'
        }
    },
    computed : {
        getName(){
            return this.name
        }
    },
    methods: {
        getGame() {
            console.log(this.name)
        }
    }
}
export default sharedItems