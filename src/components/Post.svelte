<script>
    import readingTime from "../utils/readingTime";
    export let post;
</script>

<style>
    .Post-item{
        color: rgb(221, 221, 221);
        position: relative;
    }
    .Post-content{
        font-size: 16px;
        font-weight: 300;
        display: grid;
        justify-content: space-between;
        grid-gap: 5px;
        grid-template-columns: 1fr;
    }
    .Post-title{
        font-size: 20px;
        margin: 0;
        padding: 0;
    }
    .Post-title p {
        color: rgb(194, 194, 194);
        font-size: 13px;
        font-weight: 300;
        margin-top: 5px;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: rgb(176, 176, 179);
    }

    .Post-desc p{
        color: white;
        font-size: 16px;
        line-height: 28px;
        margin: 0 auto;
        word-break: break-word;
    }
    .dost{
        font-weight: 700;
        
    }
</style>

<!--Este archivo es parte del index.svelte-->
<div class="Post-item">
    <div class="Post-content">
        <div class="Post-head">
            <div class="Post-title">
                <h2>
                    <a rel="prefectch" href="blog/{post.slug}">{post.title}</a>
                </h2>
                <p>
                    <!--Esto nos mostrara el tiempo en el cual fue creado-->
                    <time datetime={post.createdAt}>{post.createdAt}</time>
                    <span class="dot">.</span>
                    <span>{readingTime(post.html)}</span>
                </p>
            </div>
            <div class="Post-tags"></div>
            <div class="Post-desc">
                <p>{post.desc}</p>
            </div>
        </div>
    </div>

</div>