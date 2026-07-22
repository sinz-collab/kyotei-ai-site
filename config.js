window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8d3050c3ded38b3259c00d3e60c2fba77977afc1/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/8d3050c3ded38b3259c00d3e60c2fba77977afc1/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
