from yapsy.PluginManager import PluginManager


def main():
    simplePluginManager = PluginManager()
    simplePluginManager.setPluginPlaces(["plugins"])
    simplePluginManager.collectPlugins()

    for plugin in simplePluginManager.getAllPlugins():
        plugin.plugin_object.greetings()


if __name__ == '__main__':
    main()
