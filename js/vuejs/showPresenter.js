const Show = {
    props: ["hash"],
    data() { return { hashState: window.location.hash }; },
    created() {
        this.listener = () => this.hashState = window.location.hash;
        window.addEventListener("hashchange", this.listener);
    },
    unmounted() { window.removeEventListener("hashchange", this.listener); },
    render() {
        let klass;
        if (this.hashState === this.hash)
            klass = ""
        else
            klass = "hidden"
        return <div class={klass} > {this.$slots.default()}</div>
    },
};