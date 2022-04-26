import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

WA.onInit().then(() => {

    // State
    let user_count = 0;
    if (WA.state.hasVariable('varMapUserCount')){
        let user_count = WA.state.loadVariable('varMapUserCount');
        user_count = user_count + 1;
        WA.state.saveVariable('varMapUserCount', user_count).catch(e => console.error('Something went wrong while saving variable', e));

    } else {
        let user_count = 1;
        WA.state.saveVariable('varMapUserCount', user_count).catch(e => console.error('Something went wrong while saving variable', e));
    } 

    console.log(user_count);


});

// Chat interaction
WA.chat.onChatMessage((message => {
    console.log('The user typed a message', message);
    // echo
    WA.chat.sendChatMessage(message, 'OfficeAssistantAI(TM)');
}));
