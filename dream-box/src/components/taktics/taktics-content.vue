<template>
    <div class="default-taktic" :class="flag"></div>
</template>
<script>
export default {
    props: {
        flag: {
           type: String,
           default: "",
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style>
.default-taktic{
    background: #F0F3FC;
    border-radius: 8px;
    width: 30px;
    height: 30px;
}
.made{
    background: url("~@i/goals/made.svg") no-repeate;
}
.not-done{
    background: linear-gradient(#FA7D98, #FA7D98), url("~@i/goals/notdone.svg") no-repeate;
}
.given{background: #C8E2FF;}
</style>