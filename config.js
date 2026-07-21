window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ba2c213639001e51a5a4888c0caf7b850e6b7762/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ba2c213639001e51a5a4888c0caf7b850e6b7762/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
