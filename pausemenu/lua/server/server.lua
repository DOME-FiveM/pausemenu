lib.callback.register("stadium:ui:getStatistics", function(source)
    -- Get license from source, pass to database call below

    -- Call to the database, get some information like;
    -- username
    -- id
    -- playtime
    -- kills
    local data = MySQL.query.await("SELECT * FROM stadium_stats WHERE license = ?", { license })

    return data
end)
