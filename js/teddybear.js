import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

WA.onInit().then(() => {

    // State

    if (WA.state.hasVariable('varMapUserCount')){
        let user_count = WA.state.loadVariable('varMapUserCount');
        user_count = user_count + 1;
        WA.state.saveVariable('varMapUserCount', user_count).catch(e => console.error('Something went wrong while saving variable', e));

    } else {
        let user_count = 1;
        WA.state.saveVariable('varMapUserCount', user_count).catch(e => console.error('Something went wrong while saving variable', e));
    } 

    console.log(user_count);


    // // Info
    // console.log('Room id: ', WA.room.id);
    // console.log('Map URL: ', WA.room.mapURL);
    // console.log('Current player name: ', WA.player.name);
    //
    // // Welcome Message
    // var textmessage = `Hello ${WA.player.name}`
    // WA.chat.sendChatMessage(textmessage, 'OfficeAssistantAI(TM)');

});

