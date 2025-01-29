lib.callback.register("stadium:ui:getStatistics", function(source)
    assert(source)

    local player = RACE.Functions.GetPlayer(source)
    assert(player)

    local license = player.PlayerData.license
    print("License: ", license)

    -- Get license from source, pass to database call below
    -- Call to the database, get some information like;
    -- username
    -- id
    -- playtime
    -- kills
    
    local data = MySQL.query.await("SELECT * FROM stadium_stats WHERE license = ?", { license })

    return data
end)
