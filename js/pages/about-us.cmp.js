export default {
    template: `
        <section class="about-us">
        
                <h2 v-if="isShowTitle">About Us!</h2>
         
            <pre>
            <i class="fas fa-smile-wink"></i> Telephone: 0544928441/0547533616 <i class="fas fa-smile-wink"></i>

                <i class="fas fa-inbox"></i> Contact Us : <a href="#">dolevTsfoni1@gmail.com/ori.azani@gmail.com</a></pre>           
            
            </pre>
        </section>
    `,
    data() {
        return {
            inetvalId: 0,
            isShowTitle: false
        }
    },
    created() {
        this.inetvalId = setInterval(() => {
            console.log('say hi');
        }, 2000);
        setTimeout(() => {
            this.isShowTitle = !this.isShowTitle
        }, 500)
    },
    destroyed() {
        clearInterval(this.inetvalId);
        console.log('about page was destroyed');
    }
}