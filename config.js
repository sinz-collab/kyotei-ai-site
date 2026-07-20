window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/256e155c9346b36ca8c8bd93168bd37bbb587dfd/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/256e155c9346b36ca8c8bd93168bd37bbb587dfd/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
