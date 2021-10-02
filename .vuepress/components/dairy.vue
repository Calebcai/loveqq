<template>
    <div>
        <div v-if="header" class="header">
            <slot name="header">
                {{header}}
            </slot>
        </div>
        <div v-if="main" class="main">
            <slot name="main">
                {{main}}
            </slot>
        </div>
        <div v-if="footer" class="footer">
            <slot name="footer">
                {{footer}}
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dairy',
    props: {
        header: {
            type: String,
            default: '标题'
        },
        main: {
            type: String,
            default: '内容'
        },
        footer: {
            type: String,
            default: '尾部'
        },
    },
};
</script>

<style scoped>
    .header{
        font: 800;
        text-align: center;
        font-size: 22px;
        padding-bottom: 30px;
        color: rgb(40, 40, 40);
    }
    .main{
        color: rgb(47, 47, 47);
        line-height: 40px;
        text-indent: 35px;
    }
    .footer{
        padding-top: 23px;
        color: rgb(101, 101, 101);
        display: flex;
        justify-content: flex-end;
    }
</style>