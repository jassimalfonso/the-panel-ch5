/* Web XPanel for the DEMO panel.
   The demo needs no processor, so it only connects when you ask it to:
     index.html?ipId=0A            connect to the processor serving the page with IP ID 0A
     index.html?ipId=0A&host=1.2.3.4
   Inside Crestron One / on a touchpanel this file does nothing. Library: @crestron/ch5-webxpanel. */
(function () {
  'use strict';
  var W = window.WebXPanel, qs = new URLSearchParams(location.search);
  if (!W || !qs.get('ipId') || location.protocol === 'file:') return;
  var g = W.getWebXPanel(!W.runsInContainerApp());
  if (!g.isActive) return;
  var cfg = { ipId: qs.get('ipId') };
  if (qs.get('host')) cfg.host = qs.get('host');
  g.WebXPanel.initialize(cfg);
})();
