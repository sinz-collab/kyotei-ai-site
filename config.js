window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/deb588622a4db1c9661ac1da8351547952b484ac/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/deb588622a4db1c9661ac1da8351547952b484ac/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
