window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b67423a074f0737ed4e3e103710cd7e35d435623/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/b67423a074f0737ed4e3e103710cd7e35d435623/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
