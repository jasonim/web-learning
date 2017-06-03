/**
 * Created by jsson on 17/6/2.
 */
new Vue({
    el: "#repeat-object",
    data: {
        object: {
            firstName: 'Jhone',
            lastName: 'Doe',
            age: 30
        }
    }
})

Vue.component('todo-item', {
    template: `
        <li>
         {{ title }}
         <button v-on:click="$emit('remove')"> X </button>
        </li>`,
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function () {
            this.todos.push(this.newTodoText)
            this.newTodoText= ''
        }
    }
})