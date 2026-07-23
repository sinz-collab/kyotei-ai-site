window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/da882d5b0d6dbb9a53deb6483f302ac9fc9d7b96/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/da882d5b0d6dbb9a53deb6483f302ac9fc9d7b96/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
