module.exports = CODEC_TYPES => ({
    name: "MOV",
    extension: ".mov",
    display: true,
    defaultCodec: CODEC_TYPES.H264,
    codecs: [CODEC_TYPES.H264, CODEC_TYPES.MPEG4],
})