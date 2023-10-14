/* <div class="card">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Sunt in culpa quasdfasdfads</p>
</div> */
class Blog_content {
    /**
     * @param {string} title 
     * @param {string} title_description 
     * @param {string} imgsrc
     * @param {string} imgalt
     * @param {string} p1_content 
     * @param {string} p2_content 
     */
    constructor(title, title_description, imgsrc, imgalt, p1_content, p2_content) {
        this.title = title;
        this.title_description = title_description;
        this.imgsrc = imgsrc;
        this.imgalt = imgalt;
        this.p1_content = p1_content;
        this.p2_content = p2_content;
    }
}

const div_leftcolumn = document.querySelector(".leftcolumn");

// append a div.card to the END of div.leftcolumn
function createBlogPostElement(blog_content) {

    // extremely vulnerable to script injection haha oops
    div_leftcolumn.innerHTML += `<div class="card">
        <h2>${blog_content.title}</h2>
        <h5>${blog_content.title_description}</h5>
        <div class="fakeimg" style="height:200px">
            <img class="blog_img" src="${blog_content.imgsrc}" alt="${blog_content.imgalt}">
        </div>
        <p>${blog_content.p1_content}</p>
        <p>${blog_content.p2_content}</p>
    </div>`;

}

const server_url = "https://mom-website--hubbardglacier.repl.co/";

async function main() {
    /**
     * fetch(server_url + "blogs")["blogs"] is array of objects
     * with properties exactly like class Blog_content instances
     */
    let resp = await fetch(server_url + "blogs"),
        json = await resp.json();
    console.log(json);
    let blogs = json["blogs"],
        n = blogs.length;
    for (i in blogs) {
        // n - 1 - i, so starting from oldest blog
        createBlogPostElement(blogs[n - 1 - i]);
    }
}

main();