window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/466e9346fa415b1daf90276c6b6bde04f353a2f4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/466e9346fa415b1daf90276c6b6bde04f353a2f4/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
