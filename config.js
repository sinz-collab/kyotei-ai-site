window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f020a3d677dfc593f889d7e7530cb135ce30dd6/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f020a3d677dfc593f889d7e7530cb135ce30dd6/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
