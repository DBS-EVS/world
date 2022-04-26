import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

WA.onInit().then(() => {

    // State
    /*
    if (WA.state.hasVariable('map_user_count')){
        let user_count = WA.state.loadVariable('map_user_count');
        user_count = user_count + 1;
        WA.state.saveVariable('map_user_count', user_count).catch(e => console.error('Something went wrong while saving variable', e));

    } else {
        let user_count = 1;
        WA.state.saveVariable('map_user_count', user_count).catch(e => console.error('Something went wrong while saving variable', e));    
    } 

    console.log(user_count);
    */

    // // Info
    // console.log('Room id: ', WA.room.id);
    // console.log('Map URL: ', WA.room.mapURL);
    // console.log('Current player name: ', WA.player.name);
    //
    // // Welcome Message
    // var textmessage = `Hello ${WA.player.name}`
    // WA.chat.sendChatMessage(textmessage, 'Mr Robot');

});
//
// // Chat interaction
// WA.chat.onChatMessage((message => {
//     console.log('The user typed a message', message);
//     // echo
//     WA.chat.sendChatMessage(message, 'Mr Robot');
// }));

// // User enters or leaves a level, or zone of the elevator
// // The layer needs a property "zone" with content "level_zone_<number>"
// WA.room.onEnterZone('level_zone_1', () => {
//     WA.chat.sendChatMessage("User enters Level 1", 'Mr Robot');
//     WA.room.hideLayer('level_note_1');
// });
//
// WA.room.onLeaveZone('level_zone_1', () => {
//     WA.chat.sendChatMessage("User leaves Level 1", 'Mr Robot');
//     WA.room.showLayer('level_note_1');
// });

