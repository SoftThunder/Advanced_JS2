Vue.component ('search',{

    template: `<form action="#" class="search-form" @submit.prevent="$parent.filter">
<input type="text" class="search-field" v-model="$parent.userSearch">
<button type="submit" class="btn-search">
    поиск
</button>
</form>`
})
