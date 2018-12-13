<template>
    <div id="live-cam">
       
	<div id="loadingdiv" class="loading nonvisible" style="display: none;"></div>

	<div id="playerdiv"><iframe id="playeriframe" src="player/player.php?alias=5bfc29ae924e0&amp;autoplay=1&amp;disablevideofit=1&amp;token=1a6c5a10" width="1024px" height="576px" frameborder="0" allowfullscreen="" style="width: 1024px; height: 576px;"></iframe></div>

	<div id="bannerdiv" class="nonvisible" style="width: 1024px;">
		<a href="ipcamlive.com"><img id="bannerimg" src="tpls2/img/banner_mini.gif" class="img-responsive center-block"></a>
	</div>	
    </div>
</template>

<script>
export default {
    name: 'LiveCam'
}
</script>

<style scoped>

</style>


