print("Pausemenu started")

local function openShop()
    print("Opening shop")
end

local function teleportToSafezone()
    print("Teleporting to safezone")
end

local function openSettings()
    print("Opening settings")
end

local function openGTASettings()
    print("Opening GTA settings")
end

local function openReport()
    print("Opening report")
end

-- local function closeUI()
--     SendNUIMessage({
--        "closeui"
--     })
-- end

RegisterNUICallback("doLuaAction", function(data, cb)    
    -- data = { This is what we expect
    --     id = "report",
    --     label = "Report",
    --     link = "undefined",
    -- }
    assert(data)

    print(json.encode(data))

    if not next(data) then return end

    print(data.id)
    print(data.label)
    print(data.link)

    if data.id == "report" then
        openReport()
        -- Open report, close ui
    elseif data.id == "gta_settings" then
        openGTASettings()
        -- Open gta settings menu, close ui
    elseif data.id == "settings" then
        openSettings()
        -- Open STADIUM settings menu, close ui
    elseif data.id == "safezone" then
        teleportToSafezone()
        -- Go to safezone, close ui
    elseif data.id == "shop" or data.id == "store" then
        openShop()
        -- Open shop ui, close pause menu ui and teleport to required location
    end
    ExecuteCommand("closeui")
end)



CreateThread(function()
    while true do
        Wait(5000)
        print("Updating stats")

        -- Do server call back
        local data = lib.callback.await("stadium:ui:getStatistics", false)

       -- local data = { -- We are expecting this data
        --     username = "Jay",
        --     id = 2,
        --     playtime = 40,
        --     kills = 40,
        -- }

        assert(data)

        if next(data) then
            print("We have DATA!")
        end

        SendNUIMessage({
            type = "updateStats",
            username = data.username,
            id = data.id,
            playtime = data.playtime,
            kills = data.kills,
        })

    end
end)
