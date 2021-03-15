const posts = [
    {
        id: 1,
        title: "Why I learned Vue",
        //use ` to use multiline text
        content: `I'm baby chambray street art <strong>thundercats</strong> occupy four loko
                    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
                    air plant lomo williamsburg. Listicle aesthetic whatever prism,
                    ennui glossier asymmetrical scenester austin intelligentsia
                    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
                    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
                    tumeric.`
    },
    {
        id: 2,
        title: "Using Vue CDN",
        //use ` to use multiline text
        content: ` I'm baby chambray street art thundercats occupy four loko
                    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
                    air plant lomo williamsburg. Listicle aesthetic whatever prism,
                    ennui glossier asymmetrical scenester austin intelligentsia
                    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
                    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
                    tumeric.`
    },
    {
        id: 3,
        title: "I am a Master",
        //use ` to use multiline text
        content: ` I'm baby chambray street art thundercats occupy four loko
                    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
                    air plant lomo williamsburg. Listicle aesthetic whatever prism,
                    ennui glossier asymmetrical scenester austin intelligentsia
                    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
                    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
                    tumeric.`
    }
];
const navItems = [
    {
        id: 1,
        url: "https://www.google.ca",
        name: 'home'
    },
    {
        id: 2,
        url: "https://www.duckduckgo.com",
        name: 'portfolio'
    },
    {
        id: 3,
        url: "https://www.yahoo.ca",
        name: 'contact'
    }
]
//Create a new Vue Instance then target the part we want to edit (mount)
//you can have multiple instances seperate of each other
const app = Vue.createApp({
    //fetch the blog posts when app is created, before other things have loaded.
    created() {
        this.getPosts();
    },
    data() {
        return {

            posts: this.getPosts(),
            darkModeSet: true,
            darkMode: {
                background: '#38383a',
                color: 'whitesmoke'
            },
            base: {
                fontFamily: "monospace"
            }
        };
    },
    methods: {
        toggleMode() {
            //use this because it will be accessing the data within THIS vue instance.
            //this means apply the opposite boolean
            this.darkModeSet = !this.darkModeSet;
        },
        async getPosts() {
            //await waits for data to return before it can be accessed.
            let response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await response.json();
            this.posts = data;
        }
    }
});

//components let us re-use code.
//a component can be used within a component

app.component('app-header', {
    data() {
        return {
            name: "Chris Lam",
            links: navItems,
        }
    },
    template: `<header>
    <h1>{{ name }}'s Portfolio</h1>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.id">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>`
});

app.component('blog-post', {
    props: ["post"],
    template: `
            <article>
              <h3>{{post.title}}</h3>
              <p v-html="post.body">
              </p>
              <p class="read_more">Read More</p>
            </article>`
})

app.mount('body');
