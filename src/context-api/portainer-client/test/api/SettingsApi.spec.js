/*
 * PortainerCE API
 * Portainer API is an HTTP API served by Portainer. It is used by the Portainer UI and everything you can do with the UI can be done using the HTTP API. Examples are available at https://documentation.portainer.io/api/api-examples/ You can find out more about Portainer at [http://portainer.io](http://portainer.io) and get some support on [Slack](http://portainer.io/slack/).  # Authentication  Most of the API environments(endpoints) require to be authenticated as well as some level of authorization to be used. Portainer API uses JSON Web Token to manage authentication and thus requires you to provide a token in the **Authorization** header of each request with the **Bearer** authentication mechanism.  Example:  ``` Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE ```  # Security  Each API environment(endpoint) has an associated access policy, it is documented in the description of each environment(endpoint).  Different access policies are available:  - Public access - Authenticated access - Restricted access - Administrator access  ### Public access  No authentication is required to access the environments(endpoints) with this access policy.  ### Authenticated access  Authentication is required to access the environments(endpoints) with this access policy.  ### Restricted access  Authentication is required to access the environments(endpoints) with this access policy. Extra-checks might be added to ensure access to the resource is granted. Returned data might also be filtered.  ### Administrator access  Authentication as well as an administrator role are required to access the environments(endpoints) with this access policy.  # Execute Docker requests  Portainer **DO NOT** expose specific environments(endpoints) to manage your Docker resources (create a container, remove a volume, etc...).  Instead, it acts as a reverse-proxy to the Docker HTTP API. This means that you can execute Docker requests **via** the Portainer HTTP API.  To do so, you can use the `/endpoints/{id}/docker` Portainer API environment(endpoint) (which is not documented below due to Swagger limitations). This environment(endpoint) has a restricted access policy so you still need to be authenticated to be able to query this environment(endpoint). Any query on this environment(endpoint) will be proxied to the Docker API of the associated environment(endpoint) (requests and responses objects are the same as documented in the Docker API).  # Private Registry  Using private registry, you will need to pass a based64 encoded JSON string ‘{\"registryId\":\\<registryID value\\>}’ inside the Request Header. The parameter name is \"X-Registry-Auth\". \\<registryID value\\> - The registry ID where the repository was created.  Example:  ``` eyJyZWdpc3RyeUlkIjoxfQ== ```  **NOTE**: You can find more information on how to query the Docker API in the [Docker official documentation](https://docs.docker.com/engine/api/v1.30/) as well as in [this Portainer example](https://documentation.portainer.io/api/api-examples/). 
 *
 * OpenAPI spec version: 2.21.3
 * Contact: info@portainer.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PortainerCeApi);
  }
}(this, function(expect, PortainerCeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PortainerCeApi.SettingsApi();
  });

  describe('(package)', function() {
    describe('SettingsApi', function() {
      describe('settingsInspect', function() {
        it('should call settingsInspect successfully', function(done) {
          // TODO: uncomment settingsInspect call and complete the assertions
          /*

          instance.settingsInspect(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerSettings);
            expect(data.agentSecret).to.be.a('string');
            expect(data.agentSecret).to.be("");
            expect(data.allowBindMountsForRegularUsers).to.be.a('boolean');
            expect(data.allowBindMountsForRegularUsers).to.be(false);
            expect(data.allowContainerCapabilitiesForRegularUsers).to.be.a('boolean');
            expect(data.allowContainerCapabilitiesForRegularUsers).to.be(false);
            expect(data.allowDeviceMappingForRegularUsers).to.be.a('boolean');
            expect(data.allowDeviceMappingForRegularUsers).to.be(false);
            expect(data.allowHostNamespaceForRegularUsers).to.be.a('boolean');
            expect(data.allowHostNamespaceForRegularUsers).to.be(false);
            expect(data.allowPrivilegedModeForRegularUsers).to.be.a('boolean');
            expect(data.allowPrivilegedModeForRegularUsers).to.be(false);
            expect(data.allowStackManagementForRegularUsers).to.be.a('boolean');
            expect(data.allowStackManagementForRegularUsers).to.be(false);
            expect(data.allowVolumeBrowserForRegularUsers).to.be.a('boolean');
            expect(data.allowVolumeBrowserForRegularUsers).to.be(false);
            expect(data.authenticationMethod).to.be.a('number');
            expect(data.authenticationMethod).to.be(1);
            {
              let dataCtr = data.blackListedLabels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerPair);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("name");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("value");

                      }
            }
            expect(data.displayDonationHeader).to.be.a('boolean');
            expect(data.displayDonationHeader).to.be(false);
            expect(data.displayExternalContributors).to.be.a('boolean');
            expect(data.displayExternalContributors).to.be(false);
            expect(data.edgeAgentCheckinInterval).to.be.a('number');
            expect(data.edgeAgentCheckinInterval).to.be(5);
            expect(data.edgePortainerUrl).to.be.a('string');
            expect(data.edgePortainerUrl).to.be("");
            expect(data.enableEdgeComputeFeatures).to.be.a('boolean');
            expect(data.enableEdgeComputeFeatures).to.be(false);
            expect(data.enableHostManagementFeatures).to.be.a('boolean');
            expect(data.enableHostManagementFeatures).to.be(false);
            expect(data.enableTelemetry).to.be.a('boolean');
            expect(data.enableTelemetry).to.be(false);
            expect(data.enforceEdgeID).to.be.a('boolean');
            expect(data.enforceEdgeID).to.be(false);
            {
              let dataCtr = data.featureFlagSettings;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('boolean');
                expect(data).to.be(false);
              }
            }
            expect(data.globalDeploymentOptions).to.be.a(PortainerCeApi.PortainerGlobalDeploymentOptions);
                  expect(data.globalDeploymentOptions.hideStacksFunctionality).to.be.a('boolean');
              expect(data.globalDeploymentOptions.hideStacksFunctionality).to.be(false);
            expect(data.helmRepositoryURL).to.be.a('string');
            expect(data.helmRepositoryURL).to.be("https://charts.bitnami.com/bitnami");
            expect(data.internalAuthSettings).to.be.a(PortainerCeApi.PortainerInternalAuthSettings);
                  expect(data.internalAuthSettings.requiredPasswordLength).to.be.a('number');
              expect(data.internalAuthSettings.requiredPasswordLength).to.be(0);
            expect(data.isDockerDesktopExtension).to.be.a('boolean');
            expect(data.isDockerDesktopExtension).to.be(false);
            expect(data.kubeconfigExpiry).to.be.a('string');
            expect(data.kubeconfigExpiry).to.be("24h");
            expect(data.kubectlShellImage).to.be.a('string');
            expect(data.kubectlShellImage).to.be("portainer/kubectl-shell");
            expect(data.lDAPSettings).to.be.a(PortainerCeApi.PortainerLDAPSettings);
                  expect(data.lDAPSettings.anonymousMode).to.be.a('boolean');
              expect(data.lDAPSettings.anonymousMode).to.be(true);
              expect(data.lDAPSettings.autoCreateUsers).to.be.a('boolean');
              expect(data.lDAPSettings.autoCreateUsers).to.be(true);
              {
                let dataCtr = data.lDAPSettings.groupSearchSettings;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.PortainerLDAPGroupSearchSettings);
                  expect(data.groupAttribute).to.be.a('string');
                  expect(data.groupAttribute).to.be("member");
                  expect(data.groupBaseDN).to.be.a('string');
                  expect(data.groupBaseDN).to.be("dc=ldap,dc=domain,dc=tld");
                  expect(data.groupFilter).to.be.a('string');
                  expect(data.groupFilter).to.be("(objectClass=account");
  
                        }
              }
              expect(data.lDAPSettings.password).to.be.a('string');
              expect(data.lDAPSettings.password).to.be("readonly-password");
              expect(data.lDAPSettings.readerDN).to.be.a('string');
              expect(data.lDAPSettings.readerDN).to.be("cn=readonly-account,dc=ldap,dc=domain,dc=tld");
              {
                let dataCtr = data.lDAPSettings.searchSettings;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.PortainerLDAPSearchSettings);
                  expect(data.baseDN).to.be.a('string');
                  expect(data.baseDN).to.be("dc=ldap,dc=domain,dc=tld");
                  expect(data.filter).to.be.a('string');
                  expect(data.filter).to.be("(objectClass=account)");
                  expect(data.userNameAttribute).to.be.a('string');
                  expect(data.userNameAttribute).to.be("uid");
  
                        }
              }
              expect(data.lDAPSettings.startTLS).to.be.a('boolean');
              expect(data.lDAPSettings.startTLS).to.be(true);
              expect(data.lDAPSettings.tLSConfig).to.be.a(PortainerCeApi.PortainerTLSConfiguration);
                    expect(data.lDAPSettings.tLSConfig.TLS).to.be.a('boolean');
                expect(data.lDAPSettings.tLSConfig.TLS).to.be(true);
                expect(data.lDAPSettings.tLSConfig.tLSCACert).to.be.a('string');
                expect(data.lDAPSettings.tLSConfig.tLSCACert).to.be("/data/tls/ca.pem");
                expect(data.lDAPSettings.tLSConfig.tLSCert).to.be.a('string');
                expect(data.lDAPSettings.tLSConfig.tLSCert).to.be("/data/tls/cert.pem");
                expect(data.lDAPSettings.tLSConfig.tLSKey).to.be.a('string');
                expect(data.lDAPSettings.tLSConfig.tLSKey).to.be("/data/tls/key.pem");
                expect(data.lDAPSettings.tLSConfig.tLSSkipVerify).to.be.a('boolean');
                expect(data.lDAPSettings.tLSConfig.tLSSkipVerify).to.be(false);
              expect(data.lDAPSettings.URL).to.be.a('string');
              expect(data.lDAPSettings.URL).to.be("myldap.domain.tld:389");
            expect(data.logoURL).to.be.a('string');
            expect(data.logoURL).to.be("https://mycompany.mydomain.tld/logo.png");
            expect(data.oAuthSettings).to.be.a(PortainerCeApi.PortainerOAuthSettings);
                  expect(data.oAuthSettings.accessTokenURI).to.be.a('string');
              expect(data.oAuthSettings.accessTokenURI).to.be("");
              expect(data.oAuthSettings.authStyle).to.be.a('number');
              expect(data.oAuthSettings.authStyle).to.be(0);
              expect(data.oAuthSettings.authorizationURI).to.be.a('string');
              expect(data.oAuthSettings.authorizationURI).to.be("");
              expect(data.oAuthSettings.clientID).to.be.a('string');
              expect(data.oAuthSettings.clientID).to.be("");
              expect(data.oAuthSettings.clientSecret).to.be.a('string');
              expect(data.oAuthSettings.clientSecret).to.be("");
              expect(data.oAuthSettings.defaultTeamID).to.be.a('number');
              expect(data.oAuthSettings.defaultTeamID).to.be(0);
              {
                let dataCtr = data.oAuthSettings.kubeSecretKey;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.oAuthSettings.logoutURI).to.be.a('string');
              expect(data.oAuthSettings.logoutURI).to.be("");
              expect(data.oAuthSettings.oAuthAutoCreateUsers).to.be.a('boolean');
              expect(data.oAuthSettings.oAuthAutoCreateUsers).to.be(false);
              expect(data.oAuthSettings.redirectURI).to.be.a('string');
              expect(data.oAuthSettings.redirectURI).to.be("");
              expect(data.oAuthSettings.resourceURI).to.be.a('string');
              expect(data.oAuthSettings.resourceURI).to.be("");
              expect(data.oAuthSettings.SSO).to.be.a('boolean');
              expect(data.oAuthSettings.SSO).to.be(false);
              expect(data.oAuthSettings.scopes).to.be.a('string');
              expect(data.oAuthSettings.scopes).to.be("");
              expect(data.oAuthSettings.userIdentifier).to.be.a('string');
              expect(data.oAuthSettings.userIdentifier).to.be("");
            expect(data.showKomposeBuildOption).to.be.a('boolean');
            expect(data.showKomposeBuildOption).to.be(false);
            expect(data.snapshotInterval).to.be.a('string');
            expect(data.snapshotInterval).to.be("5m");
            expect(data.templatesURL).to.be.a('string');
            expect(data.templatesURL).to.be("https://raw.githubusercontent.com/portainer/templates/master/templates.json");
            expect(data.trustOnFirstConnect).to.be.a('boolean');
            expect(data.trustOnFirstConnect).to.be(false);
            expect(data.userSessionTimeout).to.be.a('string');
            expect(data.userSessionTimeout).to.be("5m");
            expect(data.edge).to.be.a(PortainerCeApi.PortainerSettingsEdge);
                  expect(data.edge.commandInterval).to.be.a('number');
              expect(data.edge.commandInterval).to.be(5);
              expect(data.edge.pingInterval).to.be.a('number');
              expect(data.edge.pingInterval).to.be(5);
              expect(data.edge.snapshotInterval).to.be.a('number');
              expect(data.edge.snapshotInterval).to.be(5);
              expect(data.edge.asyncMode).to.be.a('boolean');
              expect(data.edge.asyncMode).to.be(false);
            expect(data.fdoConfiguration).to.be.a(PortainerCeApi.PortainerFDOConfiguration);
                  expect(data.fdoConfiguration.enabled).to.be.a('boolean');
              expect(data.fdoConfiguration.enabled).to.be(false);
              expect(data.fdoConfiguration.ownerPassword).to.be.a('string');
              expect(data.fdoConfiguration.ownerPassword).to.be("");
              expect(data.fdoConfiguration.ownerURL).to.be.a('string');
              expect(data.fdoConfiguration.ownerURL).to.be("");
              expect(data.fdoConfiguration.ownerUsername).to.be.a('string');
              expect(data.fdoConfiguration.ownerUsername).to.be("");
            expect(data.openAMTConfiguration).to.be.a(PortainerCeApi.PortainerOpenAMTConfiguration);
                  expect(data.openAMTConfiguration.certFileContent).to.be.a('string');
              expect(data.openAMTConfiguration.certFileContent).to.be("");
              expect(data.openAMTConfiguration.certFileName).to.be.a('string');
              expect(data.openAMTConfiguration.certFileName).to.be("");
              expect(data.openAMTConfiguration.certFilePassword).to.be.a('string');
              expect(data.openAMTConfiguration.certFilePassword).to.be("");
              expect(data.openAMTConfiguration.domainName).to.be.a('string');
              expect(data.openAMTConfiguration.domainName).to.be("");
              expect(data.openAMTConfiguration.enabled).to.be.a('boolean');
              expect(data.openAMTConfiguration.enabled).to.be(false);
              expect(data.openAMTConfiguration.mpsPassword).to.be.a('string');
              expect(data.openAMTConfiguration.mpsPassword).to.be("");
              expect(data.openAMTConfiguration.mpsServer).to.be.a('string');
              expect(data.openAMTConfiguration.mpsServer).to.be("");
              expect(data.openAMTConfiguration.mpsToken).to.be.a('string');
              expect(data.openAMTConfiguration.mpsToken).to.be("");
              expect(data.openAMTConfiguration.mpsUser).to.be.a('string');
              expect(data.openAMTConfiguration.mpsUser).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('settingsPublic', function() {
        it('should call settingsPublic successfully', function(done) {
          // TODO: uncomment settingsPublic call and complete the assertions
          /*

          instance.settingsPublic(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.SettingsPublicSettingsResponse);
            expect(data.authenticationMethod).to.be.a('number');
            expect(data.authenticationMethod).to.be(1);
            expect(data.enableEdgeComputeFeatures).to.be.a('boolean');
            expect(data.enableEdgeComputeFeatures).to.be(true);
            expect(data.enableTelemetry).to.be.a('boolean');
            expect(data.enableTelemetry).to.be(true);
            {
              let dataCtr = data.features;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('boolean');
                expect(data).to.be(false);
              }
            }
            expect(data.globalDeploymentOptions).to.be.a(PortainerCeApi.PortainerGlobalDeploymentOptions);
                  expect(data.globalDeploymentOptions.hideStacksFunctionality).to.be.a('boolean');
              expect(data.globalDeploymentOptions.hideStacksFunctionality).to.be(false);
            expect(data.isDockerDesktopExtension).to.be.a('boolean');
            expect(data.isDockerDesktopExtension).to.be(false);
            expect(data.logoURL).to.be.a('string');
            expect(data.logoURL).to.be("https://mycompany.mydomain.tld/logo.png");
            expect(data.oAuthLoginURI).to.be.a('string');
            expect(data.oAuthLoginURI).to.be("https://gitlab.com/oauth");
            expect(data.oAuthLogoutURI).to.be.a('string');
            expect(data.oAuthLogoutURI).to.be("https://gitlab.com/oauth/logout");
            expect(data.requiredPasswordLength).to.be.a('number');
            expect(data.requiredPasswordLength).to.be(1);
            expect(data.showKomposeBuildOption).to.be.a('boolean');
            expect(data.showKomposeBuildOption).to.be(false);
            expect(data.teamSync).to.be.a('boolean');
            expect(data.teamSync).to.be(true);
            expect(data.edge).to.be.a(PortainerCeApi.SettingsPublicSettingsResponseEdge);
                  expect(data.edge.commandInterval).to.be.a('number');
              expect(data.edge.commandInterval).to.be(60);
              expect(data.edge.pingInterval).to.be.a('number');
              expect(data.edge.pingInterval).to.be(60);
              expect(data.edge.snapshotInterval).to.be.a('number');
              expect(data.edge.snapshotInterval).to.be(60);
              expect(data.edge.checkinInterval).to.be.a('number');
              expect(data.edge.checkinInterval).to.be(60);
            expect(data.isAMTEnabled).to.be.a('boolean');
            expect(data.isAMTEnabled).to.be(false);
            expect(data.isFDOEnabled).to.be.a('boolean');
            expect(data.isFDOEnabled).to.be(false);
            expect(data.kubeconfigExpiry).to.be.a('string');
            expect(data.kubeconfigExpiry).to.be("24h");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('settingsUpdate', function() {
        it('should call settingsUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for settingsUpdate call and complete the assertions
          /*
          var body = new PortainerCeApi.SettingsSettingsUpdatePayload();
          body.edgePortainerURL = "";
          body.showKomposeBuildOption = false;
          body.authenticationMethod = 1;
          body.blackListedLabels = [new PortainerCeApi.PortainerPair()];
          body.blackListedLabels[0].name = "name";
          body.blackListedLabels[0].value = "value";
          body.edgeAgentCheckinInterval = 5;
          body.enableEdgeComputeFeatures = true;
          body.enableTelemetry = false;
          body.enforceEdgeID = false;
          body.globalDeploymentOptions = new PortainerCeApi.PortainerGlobalDeploymentOptions();
          body.globalDeploymentOptions.hideStacksFunctionality = false;
          body.helmRepositoryURL = "https://charts.bitnami.com/bitnami";
          body.internalAuthSettings = new PortainerCeApi.PortainerInternalAuthSettings();
          body.internalAuthSettings.requiredPasswordLength = 0;
          body.kubeconfigExpiry = "24h";
          body.kubectlShellImage = "portainer/kubectl-shell:latest";
          body.ldapsettings = new PortainerCeApi.PortainerLDAPSettings();
          body.ldapsettings.anonymousMode = true;
          body.ldapsettings.autoCreateUsers = true;
          body.ldapsettings.groupSearchSettings = [new PortainerCeApi.PortainerLDAPGroupSearchSettings()];
          body.ldapsettings.groupSearchSettings[0].groupAttribute = "member";
          body.ldapsettings.groupSearchSettings[0].groupBaseDN = "dc=ldap,dc=domain,dc=tld";
          body.ldapsettings.groupSearchSettings[0].groupFilter = "(objectClass=account";
          body.ldapsettings.password = "readonly-password";
          body.ldapsettings.readerDN = "cn=readonly-account,dc=ldap,dc=domain,dc=tld";
          body.ldapsettings.searchSettings = [new PortainerCeApi.PortainerLDAPSearchSettings()];
          body.ldapsettings.searchSettings[0].baseDN = "dc=ldap,dc=domain,dc=tld";
          body.ldapsettings.searchSettings[0].filter = "(objectClass=account)";
          body.ldapsettings.searchSettings[0].userNameAttribute = "uid";
          body.ldapsettings.startTLS = true;
          body.ldapsettings.tLSConfig = new PortainerCeApi.PortainerTLSConfiguration();
          body.ldapsettings.tLSConfig.TLS = true;
          body.ldapsettings.tLSConfig.tLSCACert = "/data/tls/ca.pem";
          body.ldapsettings.tLSConfig.tLSCert = "/data/tls/cert.pem";
          body.ldapsettings.tLSConfig.tLSKey = "/data/tls/key.pem";
          body.ldapsettings.tLSConfig.tLSSkipVerify = false;
          body.ldapsettings.URL = "myldap.domain.tld:389";
          body.logoURL = "https://mycompany.mydomain.tld/logo.png";
          body.oauthSettings = new PortainerCeApi.PortainerOAuthSettings();
          body.oauthSettings.accessTokenURI = "";
          body.oauthSettings.authStyle = 0;
          body.oauthSettings.authorizationURI = "";
          body.oauthSettings.clientID = "";
          body.oauthSettings.clientSecret = "";
          body.oauthSettings.defaultTeamID = 0;
          body.oauthSettings.kubeSecretKey = [0];
          body.oauthSettings.logoutURI = "";
          body.oauthSettings.oAuthAutoCreateUsers = false;
          body.oauthSettings.redirectURI = "";
          body.oauthSettings.resourceURI = "";
          body.oauthSettings.SSO = false;
          body.oauthSettings.scopes = "";
          body.oauthSettings.userIdentifier = "";
          body.snapshotInterval = "5m";
          body.templatesURL = "https://raw.githubusercontent.com/portainer/templates/master/templates.json";
          body.trustOnFirstConnect = false;
          body.userSessionTimeout = "5m";

          instance.settingsUpdate(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PortainerCeApi.PortainerSettings);
            expect(data.agentSecret).to.be.a('string');
            expect(data.agentSecret).to.be("");
            expect(data.allowBindMountsForRegularUsers).to.be.a('boolean');
            expect(data.allowBindMountsForRegularUsers).to.be(false);
            expect(data.allowContainerCapabilitiesForRegularUsers).to.be.a('boolean');
            expect(data.allowContainerCapabilitiesForRegularUsers).to.be(false);
            expect(data.allowDeviceMappingForRegularUsers).to.be.a('boolean');
            expect(data.allowDeviceMappingForRegularUsers).to.be(false);
            expect(data.allowHostNamespaceForRegularUsers).to.be.a('boolean');
            expect(data.allowHostNamespaceForRegularUsers).to.be(false);
            expect(data.allowPrivilegedModeForRegularUsers).to.be.a('boolean');
            expect(data.allowPrivilegedModeForRegularUsers).to.be(false);
            expect(data.allowStackManagementForRegularUsers).to.be.a('boolean');
            expect(data.allowStackManagementForRegularUsers).to.be(false);
            expect(data.allowVolumeBrowserForRegularUsers).to.be.a('boolean');
            expect(data.allowVolumeBrowserForRegularUsers).to.be(false);
            expect(data.authenticationMethod).to.be.a('number');
            expect(data.authenticationMethod).to.be(1);
            {
              let dataCtr = data.blackListedLabels;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PortainerCeApi.PortainerPair);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("name");
                expect(data.value).to.be.a('string');
                expect(data.value).to.be("value");

                      }
            }
            expect(data.displayDonationHeader).to.be.a('boolean');
            expect(data.displayDonationHeader).to.be(false);
            expect(data.displayExternalContributors).to.be.a('boolean');
            expect(data.displayExternalContributors).to.be(false);
            expect(data.edgeAgentCheckinInterval).to.be.a('number');
            expect(data.edgeAgentCheckinInterval).to.be(5);
            expect(data.edgePortainerUrl).to.be.a('string');
            expect(data.edgePortainerUrl).to.be("");
            expect(data.enableEdgeComputeFeatures).to.be.a('boolean');
            expect(data.enableEdgeComputeFeatures).to.be(false);
            expect(data.enableHostManagementFeatures).to.be.a('boolean');
            expect(data.enableHostManagementFeatures).to.be(false);
            expect(data.enableTelemetry).to.be.a('boolean');
            expect(data.enableTelemetry).to.be(false);
            expect(data.enforceEdgeID).to.be.a('boolean');
            expect(data.enforceEdgeID).to.be(false);
            {
              let dataCtr = data.featureFlagSettings;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('boolean');
                expect(data).to.be(false);
              }
            }
            expect(data.globalDeploymentOptions).to.be.a(PortainerCeApi.PortainerGlobalDeploymentOptions);
                  expect(data.globalDeploymentOptions.hideStacksFunctionality).to.be.a('boolean');
              expect(data.globalDeploymentOptions.hideStacksFunctionality).to.be(false);
            expect(data.helmRepositoryURL).to.be.a('string');
            expect(data.helmRepositoryURL).to.be("https://charts.bitnami.com/bitnami");
            expect(data.internalAuthSettings).to.be.a(PortainerCeApi.PortainerInternalAuthSettings);
                  expect(data.internalAuthSettings.requiredPasswordLength).to.be.a('number');
              expect(data.internalAuthSettings.requiredPasswordLength).to.be(0);
            expect(data.isDockerDesktopExtension).to.be.a('boolean');
            expect(data.isDockerDesktopExtension).to.be(false);
            expect(data.kubeconfigExpiry).to.be.a('string');
            expect(data.kubeconfigExpiry).to.be("24h");
            expect(data.kubectlShellImage).to.be.a('string');
            expect(data.kubectlShellImage).to.be("portainer/kubectl-shell");
            expect(data.lDAPSettings).to.be.a(PortainerCeApi.PortainerLDAPSettings);
                  expect(data.lDAPSettings.anonymousMode).to.be.a('boolean');
              expect(data.lDAPSettings.anonymousMode).to.be(true);
              expect(data.lDAPSettings.autoCreateUsers).to.be.a('boolean');
              expect(data.lDAPSettings.autoCreateUsers).to.be(true);
              {
                let dataCtr = data.lDAPSettings.groupSearchSettings;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.PortainerLDAPGroupSearchSettings);
                  expect(data.groupAttribute).to.be.a('string');
                  expect(data.groupAttribute).to.be("member");
                  expect(data.groupBaseDN).to.be.a('string');
                  expect(data.groupBaseDN).to.be("dc=ldap,dc=domain,dc=tld");
                  expect(data.groupFilter).to.be.a('string');
                  expect(data.groupFilter).to.be("(objectClass=account");
  
                        }
              }
              expect(data.lDAPSettings.password).to.be.a('string');
              expect(data.lDAPSettings.password).to.be("readonly-password");
              expect(data.lDAPSettings.readerDN).to.be.a('string');
              expect(data.lDAPSettings.readerDN).to.be("cn=readonly-account,dc=ldap,dc=domain,dc=tld");
              {
                let dataCtr = data.lDAPSettings.searchSettings;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(PortainerCeApi.PortainerLDAPSearchSettings);
                  expect(data.baseDN).to.be.a('string');
                  expect(data.baseDN).to.be("dc=ldap,dc=domain,dc=tld");
                  expect(data.filter).to.be.a('string');
                  expect(data.filter).to.be("(objectClass=account)");
                  expect(data.userNameAttribute).to.be.a('string');
                  expect(data.userNameAttribute).to.be("uid");
  
                        }
              }
              expect(data.lDAPSettings.startTLS).to.be.a('boolean');
              expect(data.lDAPSettings.startTLS).to.be(true);
              expect(data.lDAPSettings.tLSConfig).to.be.a(PortainerCeApi.PortainerTLSConfiguration);
                    expect(data.lDAPSettings.tLSConfig.TLS).to.be.a('boolean');
                expect(data.lDAPSettings.tLSConfig.TLS).to.be(true);
                expect(data.lDAPSettings.tLSConfig.tLSCACert).to.be.a('string');
                expect(data.lDAPSettings.tLSConfig.tLSCACert).to.be("/data/tls/ca.pem");
                expect(data.lDAPSettings.tLSConfig.tLSCert).to.be.a('string');
                expect(data.lDAPSettings.tLSConfig.tLSCert).to.be("/data/tls/cert.pem");
                expect(data.lDAPSettings.tLSConfig.tLSKey).to.be.a('string');
                expect(data.lDAPSettings.tLSConfig.tLSKey).to.be("/data/tls/key.pem");
                expect(data.lDAPSettings.tLSConfig.tLSSkipVerify).to.be.a('boolean');
                expect(data.lDAPSettings.tLSConfig.tLSSkipVerify).to.be(false);
              expect(data.lDAPSettings.URL).to.be.a('string');
              expect(data.lDAPSettings.URL).to.be("myldap.domain.tld:389");
            expect(data.logoURL).to.be.a('string');
            expect(data.logoURL).to.be("https://mycompany.mydomain.tld/logo.png");
            expect(data.oAuthSettings).to.be.a(PortainerCeApi.PortainerOAuthSettings);
                  expect(data.oAuthSettings.accessTokenURI).to.be.a('string');
              expect(data.oAuthSettings.accessTokenURI).to.be("");
              expect(data.oAuthSettings.authStyle).to.be.a('number');
              expect(data.oAuthSettings.authStyle).to.be(0);
              expect(data.oAuthSettings.authorizationURI).to.be.a('string');
              expect(data.oAuthSettings.authorizationURI).to.be("");
              expect(data.oAuthSettings.clientID).to.be.a('string');
              expect(data.oAuthSettings.clientID).to.be("");
              expect(data.oAuthSettings.clientSecret).to.be.a('string');
              expect(data.oAuthSettings.clientSecret).to.be("");
              expect(data.oAuthSettings.defaultTeamID).to.be.a('number');
              expect(data.oAuthSettings.defaultTeamID).to.be(0);
              {
                let dataCtr = data.oAuthSettings.kubeSecretKey;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              expect(data.oAuthSettings.logoutURI).to.be.a('string');
              expect(data.oAuthSettings.logoutURI).to.be("");
              expect(data.oAuthSettings.oAuthAutoCreateUsers).to.be.a('boolean');
              expect(data.oAuthSettings.oAuthAutoCreateUsers).to.be(false);
              expect(data.oAuthSettings.redirectURI).to.be.a('string');
              expect(data.oAuthSettings.redirectURI).to.be("");
              expect(data.oAuthSettings.resourceURI).to.be.a('string');
              expect(data.oAuthSettings.resourceURI).to.be("");
              expect(data.oAuthSettings.SSO).to.be.a('boolean');
              expect(data.oAuthSettings.SSO).to.be(false);
              expect(data.oAuthSettings.scopes).to.be.a('string');
              expect(data.oAuthSettings.scopes).to.be("");
              expect(data.oAuthSettings.userIdentifier).to.be.a('string');
              expect(data.oAuthSettings.userIdentifier).to.be("");
            expect(data.showKomposeBuildOption).to.be.a('boolean');
            expect(data.showKomposeBuildOption).to.be(false);
            expect(data.snapshotInterval).to.be.a('string');
            expect(data.snapshotInterval).to.be("5m");
            expect(data.templatesURL).to.be.a('string');
            expect(data.templatesURL).to.be("https://raw.githubusercontent.com/portainer/templates/master/templates.json");
            expect(data.trustOnFirstConnect).to.be.a('boolean');
            expect(data.trustOnFirstConnect).to.be(false);
            expect(data.userSessionTimeout).to.be.a('string');
            expect(data.userSessionTimeout).to.be("5m");
            expect(data.edge).to.be.a(PortainerCeApi.PortainerSettingsEdge);
                  expect(data.edge.commandInterval).to.be.a('number');
              expect(data.edge.commandInterval).to.be(5);
              expect(data.edge.pingInterval).to.be.a('number');
              expect(data.edge.pingInterval).to.be(5);
              expect(data.edge.snapshotInterval).to.be.a('number');
              expect(data.edge.snapshotInterval).to.be(5);
              expect(data.edge.asyncMode).to.be.a('boolean');
              expect(data.edge.asyncMode).to.be(false);
            expect(data.fdoConfiguration).to.be.a(PortainerCeApi.PortainerFDOConfiguration);
                  expect(data.fdoConfiguration.enabled).to.be.a('boolean');
              expect(data.fdoConfiguration.enabled).to.be(false);
              expect(data.fdoConfiguration.ownerPassword).to.be.a('string');
              expect(data.fdoConfiguration.ownerPassword).to.be("");
              expect(data.fdoConfiguration.ownerURL).to.be.a('string');
              expect(data.fdoConfiguration.ownerURL).to.be("");
              expect(data.fdoConfiguration.ownerUsername).to.be.a('string');
              expect(data.fdoConfiguration.ownerUsername).to.be("");
            expect(data.openAMTConfiguration).to.be.a(PortainerCeApi.PortainerOpenAMTConfiguration);
                  expect(data.openAMTConfiguration.certFileContent).to.be.a('string');
              expect(data.openAMTConfiguration.certFileContent).to.be("");
              expect(data.openAMTConfiguration.certFileName).to.be.a('string');
              expect(data.openAMTConfiguration.certFileName).to.be("");
              expect(data.openAMTConfiguration.certFilePassword).to.be.a('string');
              expect(data.openAMTConfiguration.certFilePassword).to.be("");
              expect(data.openAMTConfiguration.domainName).to.be.a('string');
              expect(data.openAMTConfiguration.domainName).to.be("");
              expect(data.openAMTConfiguration.enabled).to.be.a('boolean');
              expect(data.openAMTConfiguration.enabled).to.be(false);
              expect(data.openAMTConfiguration.mpsPassword).to.be.a('string');
              expect(data.openAMTConfiguration.mpsPassword).to.be("");
              expect(data.openAMTConfiguration.mpsServer).to.be.a('string');
              expect(data.openAMTConfiguration.mpsServer).to.be("");
              expect(data.openAMTConfiguration.mpsToken).to.be.a('string');
              expect(data.openAMTConfiguration.mpsToken).to.be("");
              expect(data.openAMTConfiguration.mpsUser).to.be.a('string');
              expect(data.openAMTConfiguration.mpsUser).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
