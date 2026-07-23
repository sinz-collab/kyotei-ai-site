window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/68d132cee3ef1bed54cd73fb7c43158f4b82e4a6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/68d132cee3ef1bed54cd73fb7c43158f4b82e4a6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
