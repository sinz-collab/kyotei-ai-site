window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/276e42226df3eb6d5ea008b22fed76a2879ed017/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/276e42226df3eb6d5ea008b22fed76a2879ed017/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
