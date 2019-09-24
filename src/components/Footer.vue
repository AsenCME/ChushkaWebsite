<template>
	<div class="footer">
		Copyright {{new Date().getFullYear()}}
		<span style="color: burlywood; font-weight: 100; margin: 0px 8px; font-size: 20px;">|</span>
		<span style="color: #ccc">Chushka EOOD</span>
		<!-- <span style="color: burlywood; margin: 0px 5px;">&</span>
		<span style="color: #eee; cursor: pointer;" @click="visitme">Asen Georgiev</span> -->
		<span style="color: #fff; font-style: normal; margin-left: 10px; font-size: 16px;">&copy;</span>
	</div>
</template>

<style scoped>
.footer {
	padding: 10px 40px;
	font-size: 14px;
	text-align: right;
	border-top: 1px solid #565b61;
	background-color: #313539;
	color: #fff;
	font-weight: 300;
}
</style>
