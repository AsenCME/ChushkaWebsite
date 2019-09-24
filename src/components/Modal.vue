<template>
    <div class="overlay" :class="{ closed: !isOpen}">
        <div class="modal">
            <div class="header">Offer of the season</div>
            <div class="text">{{text}}</div>
            <div class="close-btn" @click="$emit('closeModal')">Awesome!</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: { ...mapGetters(["displayLang"]) },
	props: ["text", "isOpen"],
	methods: {},
};
</script>

<style scoped>
.overlay {
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(30, 27, 53, 0.8);
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal {
	width: 40%;
	padding: 2vw;
	background: #c5c5c5;
	box-shadow: 0px 15px 20px -10px black;
	border-radius: 5px;
	opacity: 1;
	transition: 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.text {
	font-size: 30px;
}
.header {
	top: 0px;
	left: 0px;
	width: 100%;
	margin-bottom: 30px;
	padding-bottom: 10px;
	border-bottom: 1px solid darkgray;
	font-size: 20px;
	color: black;
	font-weight: 500;
}
.closed {
	display: none;
}
.closed .modal {
	opacity: 0;
}
.close-btn {
	float: right;
	text-align: right;
	padding: 10px 20px;
	border: 1px solid #6e6e6e;
	display: inline;
	margin-top: 30px;
	font-size: 18px;
	text-transform: uppercase;
	border-radius: 3px;
	cursor: pointer;
}
</style>
