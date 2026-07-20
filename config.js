window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cb0a965fa48f26d2fe4e3b57a91cdf2ae20cf7cf/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/cb0a965fa48f26d2fe4e3b57a91cdf2ae20cf7cf/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
