window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e7c728a116b6ef47c637e492db9fdb86cbd10f2d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/e7c728a116b6ef47c637e492db9fdb86cbd10f2d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
