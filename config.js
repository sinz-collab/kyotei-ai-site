window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ae5d161ccd51783cacc4904970b4ce76587f8461/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/ae5d161ccd51783cacc4904970b4ce76587f8461/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
