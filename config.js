window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b85190e22fcf826db60372e503d0163d0f15a05d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b85190e22fcf826db60372e503d0163d0f15a05d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
