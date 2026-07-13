window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8377b4be926cc7337d7cf99247eab4cf14e93e79/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8377b4be926cc7337d7cf99247eab4cf14e93e79/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
