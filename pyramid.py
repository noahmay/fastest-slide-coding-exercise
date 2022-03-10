class Pyramid:
    "Pyramid class for fastest slide problem"
    
    def __init__(self, pyramid_path=None):
        if(pyramid_path == None):
            self.layers = []
            return

        with open(pyramid_path, "r") as f:
            for index, line in enumerate(f):
                if(index == 0):
                    self.layers = [None] * int(line)
                else:
                    self.layers[index-1] = [int(number) for number in line.rstrip().split(" ")]

    def addLayer(self, layer):
        if(len(layer) == 0):
             raise Exception("Layer length must be greater than 0")
        
        if(len(self.layers) == 0):
            self.layers.append(layer)
            return

        if(len(layer) != len(self.layers[-1]) + 1):
             raise Exception("Layer length must be one more than the previous layer")
        
        self.layers.append(layer)

    def removeLayer(self):
        if(len(self.layers) == 0):
            raise Exception("No layers to remove")
        return self.layers.pop()
        
    def getFastestSlide(self):
        layers_copy = self.layers.copy()
        #start for second to layer and go backwards
        for layer_index in range(len(layers_copy)-2, -1, -1):
            current_layer = layers_copy[layer_index]
            last_layer = layers_copy[layer_index+1]
           
            for number_index in range(len(current_layer)):
                current_layer[number_index] += min(last_layer[number_index], last_layer[number_index + 1])

        return layers_copy[0][0]